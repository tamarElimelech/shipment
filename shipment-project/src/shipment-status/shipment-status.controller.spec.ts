import { Test, TestingModule } from '@nestjs/testing';
import { ShipmentStatusController } from './shipment-status.controller';
import { ShipmentStatusService } from './shipment-status.service';

describe('ShipmentStatusController', () => {
  let controller: ShipmentStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShipmentStatusController],
      providers: [ShipmentStatusService],
    }).compile();

    controller = module.get<ShipmentStatusController>(ShipmentStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
