import { CommonEntity } from '@/common/entities/common.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { Question } from './question.entity';
/**
 * 组件
 */
@Entity('option')
export class Option extends CommonEntity {
  @Column({
    comment: '选项内容',
    default: '',
  })
  optionContent: string;

  @JoinTable()
  @ManyToMany(() => Question)
  questions: Question[];

}
