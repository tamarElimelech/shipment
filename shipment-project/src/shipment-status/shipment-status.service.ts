import { Inject, Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import * as sql from 'mssql';
@Injectable()
export class ShipmentStatusService implements OnModuleInit {
  constructor(
    @Inject('mssql_pool') private readonly pool: sql.ConnectionPool,
    @Inject('notification-client') private readonly kafkaClient: ClientKafka,
  ) { }
  async onModuleInit() {
    await this.kafkaClient.connect()
  }

  async handleNewStatus(orderId: number, status: string) {
    try {

      const checkRequest = await this.pool.request()
        .input('orderId', sql.Int, orderId)
        .input('status', sql.NVarChar, status)
        .query('select id from dbo.shipment_status where order_id=@orderId and status=@status')

      if (checkRequest.recordset.length > 0) {
        console.log(`Status ${status} for Order ${orderId} already exists. Skipping...`)
        return
      }

      const insertRequest = await this.pool.request()
        .input('orderId', sql.Int, orderId)
        .input('status', sql.NVarChar, status)
        .query(`insert into dbo.shipment_status (order_id, status, event_time ) 
            output inserted.id, inserted.status, inserted.event_time
            values (@orderId, @status, getdate())`)
      const newRow = insertRequest.recordset[0]

      if (newRow.status.toLowerCase() == 'shipped') {
        this.sendShippedNotification(orderId)
      }

      return newRow
    } catch (err) {
      console.error(`[ShipmentStatusService] can't insert to db: ${err.message}`)
    }
  }

  async sendShippedNotification(orderId: number) {
    const message = {
      orderId: orderId,
      message: `Your order #${orderId} has been shipped`,
      time: new Date()
    }
    await this.kafkaClient.emit('user-notification', JSON.stringify(message))
    console.log(`send to user-notification: ${JSON.stringify(message)} `)
  }

  async getTimeline(orderId) {
    const result = await this.pool.request()
      .input('orderId', sql.Int, orderId)
      .query(`select * from shipment_status where order_id=@orderId`)

    if (result.recordset.length === 0) {
      throw new NotFoundException(`order with ID ${orderId} not found`)
    }

    return result.recordset
  }

  async getCurrentStatus(orderId: number) {
    const result = await this.pool.request()
      .input('orderId', sql.Int, orderId)
      .query(`select top 1 * from shipment_status 
              where order_id=@orderId
              order by event_time desc`)
    if (result.recordset.length === 0) {
      throw new NotFoundException(`order with ID ${orderId} not found`)
    }
    return result.recordset[0]
  }
}
