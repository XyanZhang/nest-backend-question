
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Question } from './models/question.entity';
import { QuestionService } from './question.service';
import { Questionnaire } from './models/questionnaire.entity';
import { Option } from './models/Option.entity';
import { Answer } from './models/answer.entity';
import { QuestionController } from './question.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Questionnaire, Question, Option, Answer])],
  providers: [QuestionService],
  controllers: [QuestionController],
  exports: [QuestionService],
})
export class QuestionModule {}
