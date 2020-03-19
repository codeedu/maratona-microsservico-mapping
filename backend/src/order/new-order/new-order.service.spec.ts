import { Test, TestingModule } from '@nestjs/testing';
import { NewOrderService } from './new-order.service';

describe('NewOrderService', () => {
  let service: NewOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewOrderService],
    }).compile();

    service = module.get<NewOrderService>(NewOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
