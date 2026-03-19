import { Injectable } from '@nestjs/common';
import { CreateShipmentStatusDto } from './dto/create-shipment-status.dto';
import { UpdateShipmentStatusDto } from './dto/update-shipment-status.dto';

@Injectable()
export class ShipmentStatusService {
  create(createShipmentStatusDto: CreateShipmentStatusDto) {
    return 'This action adds a new shipmentStatus';
  }

  findAll() {
    return `This action returns all shipmentStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shipmentStatus`;
  }

  update(id: number, updateShipmentStatusDto: UpdateShipmentStatusDto) {
    return `This action updates a #${id} shipmentStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} shipmentStatus`;
  }
}
