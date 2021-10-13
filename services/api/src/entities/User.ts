/**
 * User TypeORM Entity for ShadowCMS
 *
 * @author ShadowCMS
 */

import dayjs from 'dayjs';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserRolesType } from './types';

const newDate = dayjs().format('YYYY-MM-DD HH:mm:ss');

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: `${newDate}` })
  createdAt: string;

  @Column({ default: `${newDate}`, onUpdate: `${newDate}` })
  updatedAt: string;

  @Column({ nullable: true })
  ein: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  byline?: string;

  @Column({ nullable: true })
  avatar?: string;

  @Column({ default: 'reporter' })
  role: UserRolesType;
}
