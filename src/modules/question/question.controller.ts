import { Body, Controller, Get, Query, Req } from '@nestjs/common';
import { QuestionService } from './question.service';
import { Request } from 'express';
import { CreateQuestionDTO } from './question.dto';

@Controller('/question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get('/create')
  async create(@Query() createQuestionDto: CreateQuestionDTO): Promise<boolean> {

    console.log('createQuestionDto',createQuestionDto)
    let query = createQuestionDto;
    // TODO: 增加 DTO 校验
    let res = await this.questionService.create({
      title: query.title as any,
      category: query.category as string,
      // type: request.query.type,
    });
    return  res
  }
}
