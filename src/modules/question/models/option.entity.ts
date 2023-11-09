import { CommonEntity } from '@/common/entities/common.entity';
import { Column, Entity } from 'typeorm';

/**
 * 组件
 */
@Entity('option')
export class Option extends CommonEntity {
  @Column({
    comment: '选项内容',
    default: '',
  })
  title: string;
}
