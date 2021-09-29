/**
 * @description Route Controllers for News Articles
 * @author ShadowCMS
 */

import { Controller, Get, Post, Param, Body, Patch, Delete, Ctx } from "routing-controllers";
import { NewsArticlesEntity } from "../entities/news.entity";
import { CTX } from "../interfaces/ctx.interface";
import Logger from "../util/logger";

const logger = Logger();

@Controller("/api/v8/news")
export class NewsArticlesController {
  /**
   * @description Get all users from database
   * CAUTION: possible big data
   */
  @Get()
  async getAll(@Ctx() ctx: CTX) {
    /**
     * Retrieve all useres with users entity created with TypeORM
     */
    const res = await ctx.db
      .createQueryBuilder(NewsArticlesEntity, "news")
      .orderBy("news.updated_at", "DESC")
      .getMany();

    if (!res) {
      return {
        error: true,
        message: "Unknown error occured while fetching news articles...",
      };
    }

    return {
      error: false,
      results: res,
    };
  }

  /**
   * @description Get one user by unique id
   */
  @Get("/:docId")
  async getOne(@Param("docId") docId: string, @Ctx() ctx: CTX) {
    const res = await ctx.db.getRepository("news").findOne({ docId: docId });

    return {
      error: false,
      result: res,
    };
  }

  /**
   * @description Create / add a new news article document to the database
   */
  @Post("/add")
  async post(@Body() article: any, @Ctx() ctx: CTX) {
    const res = await ctx.db.getRepository("news").insert(article);

    if (!res) {
      return {
        error: true,
        message: "Failed to create new news article document...",
      };
    }

    const data = await ctx.db.getRepository("news").findOne({ docId: article.docId });

    return { save: true, data };
  }

  /**
   * @description Save new data of news article
   */
  @Patch("/update/:docId")
  async put(@Param("docId") docId: string, @Body() article: any, @Ctx() ctx: CTX) {
    try {
      await ctx.db.getRepository("news").update(
        { docId },
        {
          ...article,
        },
      );
    } catch (err) {
      logger.error(`Error while updating news article. Details: `, err);
    }

    const data = await ctx.db.getRepository("news").findOne({ docId: docId });

    return {
      update: true,
      data,
    };
  }

  /**
   * @description Delete a news article from the database by id
   */
  @Delete("/delete/:docId")
  async remove(@Param("docId") docId: string, @Ctx() ctx: CTX) {
    const deleteArticle = await ctx.db.getRepository("news").delete({ docId: docId });

    if (!deleteArticle) {
      logger.error(`Unknown error occured while deleting article.`);

      return {
        error: true,
        message: "Unknown error occured while deleting article.",
      };
    }

    return `Removed article with ID: ${docId}`;
  }
}
