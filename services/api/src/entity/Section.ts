/**
 * TypeORM Entity for ShadowCMS Article Sections
 *
 * @author ShadowCMS
 */

import dayjs from "dayjs";
import { Field, Int, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";

const newDate = dayjs().format("YYYY-MM-DD HH:mm:ss");

@ObjectType()
@Entity("sections")
export class Section extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ default: `${newDate}` })
  createdAt: string;

  @Field()
  @Column({ default: `${newDate}`, onUpdate: `${newDate}` })
  updatedAt: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  slug: string;
}
