// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UserRlService } from 'src/user-rl/user-rl.service'; // User Service
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [JwtModule.register({ secret: 'The-Foodyssey-Haven', signOptions: { expiresIn: '1h' } }),DatabaseModule],
  providers: [AuthService, JwtStrategy, UserRlService],
  exports: [AuthService],
})
export class AuthModule {}
