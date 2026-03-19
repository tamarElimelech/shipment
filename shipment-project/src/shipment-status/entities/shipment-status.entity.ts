import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { orderStatus } from "./order-status.enum"

@Entity('shipment_status')
export class ShipmentStatus {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    order_id: number

    @Column()
    status: orderStatus

    @Column()
    event_time: Date
}
