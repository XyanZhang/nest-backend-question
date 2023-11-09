import { CommonEntity } from '@/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

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
    comment: '问卷',
    default: '',
  })
  questionnaire: string;
  @Column({
    comment: '答案',
    default: '',
  })
  answers: string;
}
