/**
 * @description Users Route Controllers
 * @author ShadowCMS
 */

import { Controller, Get, Post, Param, Body, Patch, Delete, Ctx } from "routing-controllers";
import { UsersEntity } from "../entities/users.entity";
import { CTX } from "../interfaces/ctx.interface";
import Logger from "../util/logger";

const logger = Logger();

@Controller("/api/v8/users")
export class UsersController {
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
      .createQueryBuilder(UsersEntity, "users")
      .orderBy("users.id", "DESC")
      .getMany();

    return {
      error: false,
      results: res,
    };
  }

  /**
   * @description Get one user by unique id
   */
  @Get("/user/:ein")
  async getOne(@Param("ein") ein: number, @Ctx() ctx: CTX) {
    const res = await ctx.db.getRepository("users").findOne({ ein });

    return {
      error: false,
      result: res,
    };
  }

  /**
   * @description Create / add a new user to the database
   */
  @Post("/add")
  async post(@Body() user: any, @Ctx() ctx: CTX) {
    const newUser = await ctx.db.getRepository("users").insert(user);

    if (!newUser) {
      return {
        error: true,
        message: "Unknown error occured while adding new user.",
      };
    }

    const getNewUser = await ctx.db.getRepository("users").findOne({ ein: user.ein });

    return { save: true, user: getNewUser };
  }

  /**
   * @description Update the information of an existing user
   */
  @Patch("/update/:ein")
  async put(@Param("ein") ein: number, @Body() user: any, @Ctx() ctx: CTX) {
    try {
      await ctx.db.getRepository("users").update({ ein }, { ...user });
    } catch (err) {
      logger.error(`Error while updating user data. Details: `, err);
    }

    const data = await ctx.db.getRepository("users").findOne({ ein });

    return {
      update: true,
      data,
    };
  }

  /**
   * @description Delete a user from the database by id
   */
  @Delete("/delete/:ein")
  async remove(@Param("ein") ein: number, @Ctx() ctx: CTX) {
    await ctx.db.getRepository("users").delete({ ein });

    return `Removed user with EIN: ${ein}`;
  }
}
