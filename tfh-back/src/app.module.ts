import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DineInModule } from './dinein/dinein.module';
import { FeedbackModule } from './feedback/feedback.module';
import { UserRlModule } from './user-rl/user-rl.module';
import { DatabaseModule } from './database/database.module';
import { CouchbaseService } from './database/couchbase/couchbase.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DineInModule, FeedbackModule, UserRlModule, DatabaseModule,AuthModule],
  controllers: [AppController],
  providers: [AppService,CouchbaseService],
  exports: [CouchbaseService],
})
export class AppModule {}
