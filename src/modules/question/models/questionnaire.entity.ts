import { CommonEntity } from '@/common/entities/common.entity';
import { Column, Entity, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Answer } from './answer.entity';
import { Question } from './question.entity';


@Entity('questionnaire')
export class Questionnaire extends CommonEntity {
  @Column({
    comment: '标题',
    default: '',
  })
  title: string;

  @Column({
    comment: '描述',
    nullable: true,
  })
  desp: string;

  @Column({
    comment: '分类',
    nullable: true,
  })
  category: string;

  @OneToMany(() => Question, (question: Question) => question.questionnaire, {
    cascade: true
  })
  @JoinTable({
    name: 'questionnaire_question'
  })
  questions: Question[];

  @OneToMany(() => Answer, (answer: Answer) => answer.questionnaire)
  answers: Answer;
}
