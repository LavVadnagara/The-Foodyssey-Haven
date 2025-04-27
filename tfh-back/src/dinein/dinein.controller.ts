import { Body, Controller, Post } from '@nestjs/common';
import { CreateDineInDto } from './dto/create-dinein.dto';
import { DineInService } from './dinein.service';

@Controller('dinein')
export class DineInController {
  constructor(private readonly dineInService: DineInService) {}

  @Post('submit')
  async submitDineIn(@Body() createDineInDto: CreateDineInDto) {
    return this.dineInService.submitDineIn(createDineInDto);
  }
}