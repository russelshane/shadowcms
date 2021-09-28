/**
 * @description News Article Entity for TypeORM
 * @author ShadowCMS
 */

import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { SharedProp } from "./shared-prop.entity";

@Entity({ name: "news" })
export class NewsArticlesEntity extends SharedProp {
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Lede data of news article
   */
  @Column({ name: "docId", nullable: false })
  docId: string;

  @Column({ name: "headline", nullable: true })
  headline?: string;

  @Column({ name: "summary", nullable: true })
  summary?: string;

  @Column({ name: "body", nullable: true })
  body?: string;

  @Column({ name: "bylines", nullable: true })
  bylines?: string;

  @Column({ name: "publish_date", nullable: true })
  publish_date?: string;

  /**
   * Status and other labels for news articles
   */
  @Column({ name: "label", nullable: true })
  label?: string;

  @Column({ name: "status", nullable: false })
  status: string;

  @Column({ name: "breaking", nullable: false, default: false })
  breaking: boolean;

  @Column({ name: "exclusive", nullable: false, default: false })
  exclusive: boolean;

  @Column({ name: "live", nullable: false, default: false })
  live: boolean;

  /**
   * News article lede media
   */
  @Column({ name: "media_url", nullable: true })
  media_url?: string;

  @Column({ name: "media_description", nullable: true })
  media_description?: string;

  @Column({ name: "media_credit", nullable: true })
  media_credit?: string;

  @Column({ name: "media_type", nullable: true })
  media_type?: string;

  /**
   * News article sections
   */
  @Column({ name: "section", nullable: true })
  section?: string;

  @Column({ name: "subsection", nullable: true })
  subsection?: string;

  @Column({ name: "topic", nullable: true })
  topic?: string;

  /**
   * News article metadata
   */
  @Column({ name: "publish_url", nullable: true })
  publish_url?: string;

  @Column({ name: "seo_headline", nullable: true })
  seo_headline?: string;

  @Column({ name: "seo_description", nullable: true })
  seo_description?: string;

  @Column({ name: "seo_keywords", nullable: true })
  seo_keywords?: string;

  @Column({ name: "seo_media", nullable: true })
  seo_media?: string;
}
