import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DBModule } from './DB/db.module';
import { ShipmentStatusModule } from './shipment-status/shipment-status.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DBModule,
    ShipmentStatusModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
