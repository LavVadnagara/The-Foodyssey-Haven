import { Module } from '@nestjs/common';
import { UserRlController } from './user-rl.controller';
import { UserRlService } from './user-rl.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserRlController],
  providers: [UserRlService],
})
export class UserRlModule {}