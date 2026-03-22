import { IsEnum, IsNotEmpty, IsNumber } from "class-validator";
import { orderStatus } from "../entities/order-status.enum";

export class CreateShipmentStatusDto {

    @IsNumber()
    @IsNotEmpty()
    orderId: number

    @IsEnum(orderStatus)
    status: orderStatus
}
