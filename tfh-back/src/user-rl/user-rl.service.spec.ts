import { Test, TestingModule } from '@nestjs/testing';
import { UserRlService } from './user-rl.service';

describe('UserRlService', () => {
  let service: UserRlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRlService],
    }).compile();

    service = module.get<UserRlService>(UserRlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
