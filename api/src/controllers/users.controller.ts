/**
 * @description Users Route Controllers
 * @author ShadowCMS
 */

import { Controller, Get, Post, Param, Body, Patch, Delete, Ctx } from "routing-controllers";
import { UsersEntity } from "../entities/users.entity";
import { CTX } from "../interfaces/ctx.interface";

@Controller("/api/v8/users")
export class UsersController {
  /**
   * @description Get all users from database
   * CAUTION: possible big data
   */
  @Get()
  getAll(@Ctx() ctx: CTX) {
    /**
     * Retrieve all useres with users entity created with TypeORM
     */
    const res = ctx.db.createQueryBuilder(UsersEntity, "users").orderBy("users.id", "DESC").getMany();

    return {
      error: false,
      results: res,
    };
  }

  /**
   * @description Get one user by unique id
   */
  @Get("/user/:id")
  getOne(@Param("id") id: number) {
    return `Returning user with id: ${id}`;
  }

  /**
   * @description Create / add a new user to the database
   */
  @Post("/add")
  post(@Body() user: any) {
    return { save: true, user };
  }

  /**
   * @description Update the information of an existing user
   */
  @Patch("/update/:id")
  put(@Param("id") id: number, @Body() user: any) {
    return {
      update: true,
      user,
      id,
    };
  }

  /**
   * @description Delete a user from the database by id
   */
  @Delete("/delete/:id")
  remove(@Param("id") id: number) {
    return `Removed user ${id}`;
  }
}
