import { Module } from '@nestjs/common';
import { DineInService } from './dinein.service';
import { DineInController } from './dinein.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DineInController],
  providers: [DineInService],
})
export class DineInModule {}