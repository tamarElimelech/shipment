import { Module } from '@nestjs/common';
import { ShipmentStatusModule } from './shipment-status/shipment-status.module';

@Module({
  imports: [ShipmentStatusModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
