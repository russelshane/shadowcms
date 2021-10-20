/**
 * GraphQL Resolver for the CMS' articles
 *
 * @author ShadowCMS
 */

import logger from "../util/logger";
import dayjs from "dayjs";
import { Resolver, Mutation, Arg, Query, Field, Ctx, Int } from "type-graphql";
import { Article } from "../entity/Article";

const newDate = dayjs().format("MMMM, D, YYYY HH:mm:ss");

@Resolver()
export class ArticleResolver {
  /**
   * Query to fetch recently published articles
   */
  @Query(() => [Article])
  async latestArticles() {
    logger.info(`Request to fetch latest articles on ${newDate}`);

    const articleResp = await Article.find({ order: { publishedAt: "DESC" } });

    return articleResp;
  }

  /**
   * Query to fetch recently updated articles
   */
  @Query(() => [Article])
  recentlyUpdatedArticles() {
    logger.info(`Request to fetch recently updated articles on ${newDate}`);

    return Article.find({ order: { updatedAt: "DESC" } });
  }

  /**
   * Mutation for publishing a new article
   */
  @Mutation(() => Article)
  async publishArticle(
    @Arg("headline", { nullable: true }) headline?: string,
    @Arg("summary", { nullable: true }) summary?: string,
    @Arg("bylines", { nullable: true }) bylines?: string,
    @Arg("bylineUsernames", { nullable: true }) bylineUsernames?: string, // array to string -> string to array
    @Arg("body", { nullable: true }) body?: string,
    @Arg("section", { nullable: true }) section?: string,
    @Arg("publish_url", { nullable: true }) publish_url?: string,
    @Arg("subsection", { nullable: true }) subsection?: string,
    @Arg("topics", { nullable: true }) topics?: string,
    @Arg("media_type", { nullable: true }) media_type?: string,
    @Arg("media_source", { nullable: true }) media_source?: string,
    @Arg("media_description", { nullable: true }) media_description?: string,
    @Arg("media_credit", { nullable: true }) media_credit?: string,
    @Arg("seo_headline", { nullable: true }) seo_headline?: string,
    @Arg("seo_description", { nullable: true }) seo_description?: string,
    @Arg("seo_keywords", { nullable: true }) seo_keywords?: string,
    @Arg("seo_image", { nullable: true }) seo_image?: string,
    @Arg("corrections", { nullable: true }) corrections?: string,
    @Arg("editors_note", { nullable: true }) editors_note?: string,
    @Arg("other_notes", { nullable: true }) other_notes?: string,
    @Arg("publishedAt", { nullable: true }) publishedAt?: string,
    @Arg("editedAt", { nullable: true }) editedAt?: string,
    @Arg("unpublished", { nullable: true }) unpublished?: boolean,
    @Arg("docId") docId?: string,
  ) {
    logger.info(`New article "${headline}" published on ${newDate}`);

    await Article.insert({
      headline,
      summary,
      body,
      docId,
      topics,
      bylines,
      bylineUsernames,
      corrections,
      editors_note,
      publish_url,
      publishedAt,
      editedAt,
      unpublished,
      other_notes,
      section,
      subsection,
      media_credit,
      media_description,
      media_source,
      media_type,
      seo_description,
      seo_headline,
      seo_image,
      seo_keywords,
    });

    const ArticleResponse = await Article.findOne({ docId });

    return ArticleResponse;
  }
}
