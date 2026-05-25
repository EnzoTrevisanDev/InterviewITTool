import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { CreateChallengeDto } from './dto/create-challenge.dto';

@Controller('challenges')
export class ChallengeController {
  constructor(private readonly challengeService: ChallengeService) {}

  @Post()
  async create(@Body() dto: CreateChallengeDto) {
    return this.challengeService.create(dto);
  }

  @Get()
  async findAll() {
    return this.challengeService.findAll();
  }
}