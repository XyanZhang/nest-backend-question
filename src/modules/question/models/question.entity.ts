import { CommonEntity } from '@/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

/**
 * 组件
 */
@Entity('question')
export class Question extends CommonEntity {
  @Column({
    comment: '内容',
    default: '',
  })
  title: string;
  @Column({
    comment: '分类',
    default: '',
  })
  category: string;
  @Column({
    comment: '类型',
    default: '',
  })
  type: string;
}
