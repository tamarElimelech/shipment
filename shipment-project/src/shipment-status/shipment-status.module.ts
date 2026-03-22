import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ShipmentStatusConsumer } from './kafka/shipment.consumer';
import { ShipmentStatusController } from './shipment-status.controller';
import { ShipmentStatusService } from './shipment-status.service';

@Module({
  imports: [ClientsModule.register([
    {
      name: 'notification-client',
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'notifications-producer',
          brokers: ['localhost:9092'],
        }
      },
    }
  ])],
  controllers: [
    ShipmentStatusController,
    ShipmentStatusConsumer],
  providers: [ShipmentStatusService],
})
export class ShipmentStatusModule { }
