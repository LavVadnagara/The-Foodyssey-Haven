// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { UserRlService } from 'src/user-rl/user-rl.service';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserRlService) {}

  async login(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload: JwtPayload = {
      username: user.username,
      sub: user.id, // Assuming your user model has an id field
    };

    const token = this.generateJwt(payload);
    return { access_token: token };
  }

  private generateJwt(payload: JwtPayload): string {
    return jwt.sign(payload, 'your_secret_key', { expiresIn: '1h' }); // Set expiration as per your need
  }
}
