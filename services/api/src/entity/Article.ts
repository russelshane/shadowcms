/**
 * TypeORM Entity for ShadowCMS Articles
 * This is temporary, until we have a proper article entity.
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

  @Field({ nullable: true })
  @Column({ type: "boolean", default: false })
  unpublished?: boolean;

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
   * Bylines in full HTML string
   */
  @Field({ nullable: true })
  @Column({ type: "text", nullable: true })
  bylines?: string;

  /**
   * HTML Content of the Article
   */
  @Field({ nullable: true })
  @Column({ type: "text", nullable: true })
  body?: string;

  /**
   * Section, subsection, topics, and other tags
   */
  @Field({ nullable: true })
  @Column({ nullable: true })
  section?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  subsection?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  topics?: string;

  /**
   * SEO fields
   */
  @Field({ nullable: true })
  @Column({ nullable: true })
  publish_url?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  seo_headline?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  seo_description?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  seo_keywords?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  seo_image?: string;

  /**
   * Lede Media
   */
  @Field({ nullable: true })
  @Column({ nullable: true })
  media_source?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  media_type?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  media_credit?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  media_description?: string;

  /**
   * MISC article items
   */
  @Field({ nullable: true })
  @Column({ nullable: true })
  corrections?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  editors_note?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  other_notes?: string;
}
