import { Test, TestingModule } from '@nestjs/testing';
import { UserRlController } from './user-rl.controller';

describe('UserRlController', () => {
  let controller: UserRlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRlController],
    }).compile();

    controller = module.get<UserRlController>(UserRlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
