/**
 * GraphQL Resolver for the CMS' articles
 *
 * @author ShadowCMS
 */

import logger from "../util/logger";
import dayjs from "dayjs";
import { Resolver, Mutation, Arg, Query, Field, Ctx, Int } from "type-graphql";
import { Article } from "../entity/Article";
import { ArticleResponse } from "../objects/ArticleResponse";
import { Section } from "../entity/Section";
import { Subsection } from "../entity/Subsection";

const newDate = dayjs().format("MMMM, D, YYYY HH:mm:ss");

@Resolver()
export class ArticleResolver {
  /**
   * Query to fetch recently published articles
   */
  @Query(() => [Article])
  async latestArticles() {
    logger.info(`Request to fetch latest articles on ${newDate}`);

    const articleResp = await Article.find();

    return articleResp;
  }

  /**
   * Query to fetch recently updated articles
   */
  @Query(() => [ArticleResponse])
  recentlyUpdatedArticles() {
    logger.info(`Request to fetch recently updated articles on ${newDate}`);

    return Article.find({ order: { updatedAt: "DESC" } });
  }

  /**
   * Mutation for publishing a new article
   */
  @Mutation(() => ArticleResponse)
  async publishArticle(
    @Arg("headline", { nullable: true }) headline?: string,
    @Arg("summary", { nullable: true }) summary?: string,
    @Arg("body", { nullable: true }) body?: string,
    @Arg("sectionId", { nullable: true }) sectionId?: number,
    @Arg("docId") docId?: string,
  ) {
    await Article.insert({
      headline,
      summary,
      body,
      sectionId,
      docId,
    });

    const articleResp = await Article.findOne({ docId });
    const sectionResp = await Section.findOne({ id: articleResp.sectionId });
    const sectionIdx = await sectionResp?.id;
    const subsectionResp = await Subsection.findOne({ parentId: sectionIdx });

    const Response = {
      ...articleResp,
      ...sectionResp,
      ...subsectionResp,
    };

    return Response;
  }
}
