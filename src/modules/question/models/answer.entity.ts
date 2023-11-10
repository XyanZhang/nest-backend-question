import { CommonEntity } from '@/common/entities/common.entity';
import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';
import { Questionnaire } from './questionnaire.entity';

/**
 * 组件
 */
@Entity('answer')
export class Answer extends CommonEntity {
  @Column({
    comment: '用户',
    default: '',
  })
  user: string;
  @Column({
    comment: '答案',
    default: '',
  })
  answers: string;

  @ManyToOne(() => Questionnaire)
  questionnaire: Questionnaire

}
