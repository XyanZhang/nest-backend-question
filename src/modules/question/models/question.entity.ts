import { CommonEntity } from '@/common/entities/common.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { Questionnaire } from './questionnaire.entity';
import { Option } from './option.entity';

enum QuestionType {
  SINGLE_CHOICE = 1,
  MULTIPLE_CHOICE = 2,
  TRUE_FALSE = 3,
  SHORT_ANSWER = 4
}
@Entity('question')
export class Question extends CommonEntity {
  @Column({
    comment: '内容',
    default: '',
  })
  title: string;
  @Column({
    comment: '分类', // 问题分类
    default: '',
  })
  category: string;

  @Column({
    comment: '类型', // 单选 多选 判断 简答
    default: QuestionType.SINGLE_CHOICE
  })
  type: number;

  @ManyToOne(() => Questionnaire, questionnaire => {
    return questionnaire.questions
  })
  questionnaire: Questionnaire;

  // @JoinTable()
  // @ManyToMany(() => Option)
  options: Option[]; 

}
