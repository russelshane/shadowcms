/**
 * Users TypeORM Entity
 *
 * @author ShadowCMS
 */

import dayjs from 'dayjs';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

const generateDate = dayjs().format('YYYY-MM-DD HH:mm:ss');

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'datetime', default: `${generateDate}` })
  createdAt: Date;

  @Column({ type: 'datetime', default: `${generateDate}`, onUpdate: `${generateDate}` })
  updatedAt: Date;

  @Column()
  ein: string;

  @Column({ nullable: true })
  byline?: string;

  @Column({ nullable: true })
  avatar?: string;
}
