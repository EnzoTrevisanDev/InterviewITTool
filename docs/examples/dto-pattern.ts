import { IsEnum, IsOptional, IsString } from 'class-validator';

export enum ChallengeType {
  CODE = 'CODE',
  WHITEBOARD = 'WHITEBOARD',
  QUIZ = 'QUIZ',
}

export class CreateChallengeDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsEnum(ChallengeType)
  type: ChallengeType;

  @IsOptional()
  @IsString()
  starterCode?: string;
}