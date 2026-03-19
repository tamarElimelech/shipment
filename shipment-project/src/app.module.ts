import { Module } from '@nestjs/common';
import { ShipmentConsumer } from './kafka/shipment.consumer';

@Module({
  imports: [],
  controllers: [],
  providers: [ShipmentConsumer],
})
export class AppModule {}
