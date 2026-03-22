import { Test, TestingModule } from '@nestjs/testing';
import { ShipmentStatusService } from './shipment-status.service';

describe('ShipmentStatusService', () => {
  let service: ShipmentStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShipmentStatusService],
    }).compile();

    service = module.get<ShipmentStatusService>(ShipmentStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
