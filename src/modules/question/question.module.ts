
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Question } from './models/question.entity';
import { QuestionService } from './student.service';

@Module({
  imports: [TypeOrmModule.forFeature([Question])],
  providers: [QuestionService],
  exports: [QuestionService],
})
export class QuestionService {}
