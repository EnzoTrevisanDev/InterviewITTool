import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateChallengeDto } from './dto/create-challenge.dto';

@Injectable()
export class ChallengeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateChallengeDto) {
    return this.prisma.challenge.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.challenge.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}