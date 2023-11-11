import { Controller, Get, Query, Req } from '@nestjs/common';
import { QuestionService } from './question.service';
import { Request } from 'express';

@Controller('/question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get('/create')
  async create(@Req() request: Request): Promise<boolean> {
    // TODO: 增加 DTO 校验
    let res = await this.questionService.create({
      title: request.query.title as string,
      category: request.query.category as string,
      // type: request.query.type,
    });
    return  res
  }

}
