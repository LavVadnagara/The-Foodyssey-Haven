import { Test, TestingModule } from '@nestjs/testing';
import { CouchbaseController } from './couchbase.controller';

describe('CouchbaseController', () => {
  let controller: CouchbaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CouchbaseController],
    }).compile();

    controller = module.get<CouchbaseController>(CouchbaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
