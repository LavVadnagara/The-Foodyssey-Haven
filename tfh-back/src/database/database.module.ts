import { Module } from '@nestjs/common';
import { CouchbaseService } from './couchbase/couchbase.service';

@Module({
  providers: [CouchbaseService],
  exports: [CouchbaseService],
})
export class DatabaseModule {}
