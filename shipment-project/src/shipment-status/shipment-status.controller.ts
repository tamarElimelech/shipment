import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShipmentStatusService } from './shipment-status.service';
import { CreateShipmentStatusDto } from './dto/create-shipment-status.dto';
import { UpdateShipmentStatusDto } from './dto/update-shipment-status.dto';

@Controller('shipment-status')
export class ShipmentStatusController {
  constructor(private readonly shipmentStatusService: ShipmentStatusService) {}

  @Post()
  create(@Body() createShipmentStatusDto: CreateShipmentStatusDto) {
    return this.shipmentStatusService.create(createShipmentStatusDto);
  }

  @Get()
  findAll() {
    return this.shipmentStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shipmentStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShipmentStatusDto: UpdateShipmentStatusDto) {
    return this.shipmentStatusService.update(+id, updateShipmentStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shipmentStatusService.remove(+id);
  }
}
