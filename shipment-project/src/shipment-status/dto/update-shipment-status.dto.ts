import { PartialType } from '@nestjs/mapped-types';
import { CreateShipmentStatusDto } from './create-shipment-status.dto';

export class UpdateShipmentStatusDto extends PartialType(CreateShipmentStatusDto) {}
