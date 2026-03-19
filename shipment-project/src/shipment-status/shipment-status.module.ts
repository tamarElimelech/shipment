import { Module } from '@nestjs/common';
import { ShipmentStatusService } from './shipment-status.service';
import { ShipmentStatusController } from './shipment-status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShipmentStatus } from './entities/shipment-status.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ShipmentStatus])],
  controllers: [ShipmentStatusController],
  providers: [ShipmentStatusService],
})
export class ShipmentStatusModule {}
