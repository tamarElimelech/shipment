import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { CreateShipmentStatusDto } from "../dto/create-shipment-status.dto";
import { ShipmentStatusService } from "../shipment-status.service";

@Controller()
export class ShipmentStatusConsumer {

    constructor(private readonly shipmentService: ShipmentStatusService) { }

    @EventPattern('shipment-status')
    async handleShipmentStatus(@Payload() data: CreateShipmentStatusDto) {
        try {
            return await this.shipmentService.handleNewStatus(data.orderId, data.status)
        }
        catch (err) {
            console.error(`[ShipmentStatusConsumer] not valid message: ${err.message} ${err}`)
        }
    }

}
