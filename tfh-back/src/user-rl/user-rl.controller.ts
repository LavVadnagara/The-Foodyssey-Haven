// src/user-rl/user-rl.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { UserRlService } from './user-rl.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';


@Controller('user')
export class UserRlController {
  constructor(private readonly userRlService: UserRlService) {}

  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto) {
    return this.userRlService.registerUser(createUserDto);
  }

  @Post('login')
  async loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.userRlService.loginUser(loginUserDto);
  }
}
