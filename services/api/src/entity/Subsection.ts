/**
 * TypeORM Entity for ShadowCMS Article Subsections
 *
 * @author ShadowCMS
 */

import dayjs from "dayjs";
import { Field, Int, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { Section } from "./Section";

const newDate = dayjs().format("YYYY-MM-DD HH:mm:ss");

@ObjectType()
@Entity("subsections")
export class Subsection extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;

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

  @Field(() => Int)
  @Column()
  parentId: number;
}
