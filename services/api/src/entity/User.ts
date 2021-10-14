/**
 * TypeORM Entity for ShadowCMS Users
 *
 * @author ShadowCMS
 */

import dayjs from "dayjs";
import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { UserRoles } from "../types/UserRoles";

const newDate = dayjs().format("YYYY-MM-DD HH:mm:ss");

@ObjectType()
@Entity("users")
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column({ default: `${newDate}` })
  createdAt: string;

  @Field()
  @Column({ default: `${newDate}`, onUpdate: `${newDate}` })
  updatedAt: string;

  @Field()
  @Column()
  username: string;

  @Column()
  password: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  byline?: string;

  @Field()
  @Column()
  role: UserRoles;

  @Field()
  @Column({ nullable: true })
  avatar?: string;
}
