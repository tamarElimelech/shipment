import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { ShipmentStatusService } from "../shipment-status.service";

@Controller()
export class ShipmentStatusConsumer {

    constructor(private readonly shipmentService: ShipmentStatusService) { }

    @EventPattern('shipment-status')
    async handleShipmentStatus(@Payload() message: any) {
        const { orderId, status } = message
        await this.shipmentService.handleNewStatus(orderId, status)
    }
}