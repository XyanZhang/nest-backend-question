import { Controller, Get, Req } from '@nestjs/common';
import { QuestionService } from './question.service';
import { Request } from 'express';

@Controller('/question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get('/create')
  async create(@Req() request: Request): Promise<boolean> {
    console.log(request)
    return true;
    // return await this.questionService.create({

    // });
  }

}
