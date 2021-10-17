/**
 * TypeORM Entity for ShadowCMS Articles
 *
 * @author ShadowCMS
 */

import dayjs from "dayjs";
import { customAlphabet } from "nanoid";
import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

const newDate = dayjs().format("YYYY-MM-DD HH:mm:ss");
const newId = customAlphabet("0123456789", 12);

@ObjectType()
@Entity({ name: "articles" })
export class Article extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  /**
   * docId is different from id, docId will have a value starting
   * with shadow_XXXXXXX, this is based on CMS guidelines and usage.
   */
  @Field()
  @Column()
  docId: string;

  /**
   * Needs primary createdAt and updatedAt. Article entity also
   * needs publishedAt and editedAt for publications.
   * Date updates for publishedAt and editedAt must be on client-side.
   */
  @Field()
  @Column({ default: `${newDate}` })
  createdAt: string;

  @Field()
  @Column({ default: `${newDate}`, onUpdate: `${newDate}` })
  updatedAt: string;

  @Field({ nullable: true })
  @Column({ default: null, nullable: true })
  publishedAt?: string;

  @Field({ nullable: true })
  @Column({ default: null, onUpdate: `${newDate}`, nullable: true })
  editedAt?: string;

  /**
   * Headline is the title displayed on the article page,
   * not on home page/search results.
   */
  @Field({ nullable: true })
  @Column({ type: "text", nullable: true })
  headline?: string;

  /**
   * Summary is the text displayed on the article page,
   * not on home page/search results.
   */
  @Field({ nullable: true })
  @Column({ type: "text", nullable: true })
  summary?: string;

  /**
   * HTML Content of the Article
   */
  @Field({ nullable: true })
  @Column({ type: "text", nullable: true })
  body?: string;

  /**
   * Only need sectionId as section will have the subsections
   */
  @Field({ nullable: true })
  @Column({ type: "int", nullable: true })
  sectionId?: number;
}
