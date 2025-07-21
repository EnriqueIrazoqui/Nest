import { Test, TestingModule } from '@nestjs/testing';
import { CarsNoSpecService } from './cars--no-spec.service';

describe('CarsNoSpecService', () => {
  let service: CarsNoSpecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarsNoSpecService],
    }).compile();

    service = module.get<CarsNoSpecService>(CarsNoSpecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
