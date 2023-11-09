import { CommonEntity } from '@/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

/**
 * 组件
 */
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
    comment: '创建人',
    nullable: true,
  })
  creater: string;
  @Column({
    comment: '问题Id',
  })
  questionId: string;
  @Column({
    comment: '选项',
  })
  options: string;
}
