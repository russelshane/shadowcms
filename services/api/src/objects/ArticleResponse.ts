/**
 * GraphQL Object Type for Article Response
 *
 * @author ShadowCMS
 */

import { Field, Int, ObjectType } from "type-graphql";
import { Section } from "../entity/Section";
import { Subsection } from "../entity/Subsection";

@ObjectType()
export class ArticleResponse {
  @Field()
  id: string;

  @Field()
  docId: string;

  @Field()
  createdAt: string;
  @Field()
  updatedAt: string;

  @Field({ nullable: true })
  publishedAt?: string;

  @Field({ nullable: true })
  editedAt?: string;

  @Field({ nullable: true })
  headline?: string;

  @Field({ nullable: true })
  summary?: string;

  @Field({ nullable: true })
  body?: string;

  @Field(() => Int, { nullable: true })
  sectionId?: number;

  @Field(() => Section, { nullable: true })
  section?: Section;

  @Field(() => Subsection, { nullable: true })
  subsection?: Subsection;
}
