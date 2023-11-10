import { CommonEntity } from '@/common/entities/common.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToOne } from 'typeorm';
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

  @JoinColumn({
    name: 'cur_question'
  })
  
  @ManyToOne(() => Question)
  question: Question;

}
