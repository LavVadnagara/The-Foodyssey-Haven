// src/dinein/dto/create-dinein.dto.ts
import { IsString, IsEmail, IsDateString, IsNumber } from 'class-validator';

export class CreateDineInDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  number: string;

  @IsDateString()
  rdate: string;

  @IsString()
  rtime: string;

  @IsNumber()
  npeople: number;
}
