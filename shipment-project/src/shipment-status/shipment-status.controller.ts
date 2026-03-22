import { Controller, Get, Param } from '@nestjs/common';
import { ShipmentStatusService } from './shipment-status.service';

@Controller('shipment-status')
export class ShipmentStatusController {
  constructor(private readonly shipmentStatusService: ShipmentStatusService) { }

  @Get('getTimeline/:orderId')
  async getTimeline(@Param('orderId') orderId: number) {
    return await this.shipmentStatusService.getTimeline(orderId)
  }

  @Get('getCurrentStatus/:orderId')
  async getCurrentStatus(@Param('orderId') orderId: number){
    return await this.shipmentStatusService.getCurrentStatus(orderId)
  }

}
