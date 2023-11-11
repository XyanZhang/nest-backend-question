import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Question } from './models/question.entity';

@Injectable()
export class QuestionService {
    constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  async create(entity: DeepPartial<Question>): Promise<boolean> {
    const res = await this.questionRepository.save(
      this.questionRepository.create(entity),
    );
    console.log(res)
    if (res) {
      return true;
    }
    return false;
  }
}
