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
      .getRepository(NewsArticlesEntity)
      .find()
      .catch((err) => console.log(err));

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
  @Get("/:id")
  async getOne(@Param("id") id: number, @Ctx() ctx: CTX) {
    const res = await ctx.db.getRepository("news").findOne({ id });

    return {
      error: false,
      results: res,
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
  @Patch("/update/:id")
  async put(@Param("id") id: number, @Body() article: any, @Ctx() ctx: CTX) {
    try {
      await ctx.db.getRepository("news").update(id, {
        ...article,
      });
    } catch (err) {
      logger.error(`Error while updating news article. Details: `, err);
    }

    const data = await ctx.db.getRepository("news").findOne({ id });

    return {
      update: true,
      data,
    };
  }

  /**
   * @description Delete a news article from the database by id
   */
  @Delete("/delete/:id")
  remove(@Param("id") id: number) {
    return `Removed user ${id}`;
  }
}
