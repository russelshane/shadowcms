/**
 * GraphQL Resolver using Type-GraphQL for User
 * Routes and Entity
 */

import dotenv from "dotenv";
import logger from "../util/logger";
import dayjs from "dayjs";
import { compare, hash } from "bcryptjs";
import { User } from "../entity/User";
import { UserRoles } from "../types/UserRoles";
import { ExpressContext } from "../interface/ExpressContext";
import { createAccessToken, createRefreshToken, SendRefreshToken } from "../auth";
import { isAuth } from "../middleware/isAuth";
import {
  Resolver,
  Mutation,
  Arg,
  Query,
  ObjectType,
  Field,
  Ctx,
  UseMiddleware,
} from "type-graphql";
import { getConnection } from "typeorm";

dotenv.config();

const newDate = dayjs().format("MMMM, D, YYYY HH:mm:ss");

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
}

@Resolver()
export class UserRolver {
  /**
   * Query to fetch/get all users in the database
   */
  @Query(() => [User])
  getUsers() {
    logger.info(
      `A request to fetch all users from a ShadowCMS database occured on ${newDate}`,
    );

    /**
     * Send response of users
     */
    return User.find({ order: { createdAt: "DESC" } });
  }

  /**
   * Query for users to access their details if needed,
   * or if the client needs it.
   */
  @Query(() => String)
  @UseMiddleware(isAuth)
  me(@Ctx() { payload }: ExpressContext) {
    const name = payload.username;

    logger.info(`@${name} accessed there account details on ${newDate}`);

    return `Hi ${name}`;
  }

  /**
   * Mutation to REVOKE refresh tokens for users
   */
  @Mutation(() => Boolean)
  async revokeRefreshTokensForUser(@Arg("userId") userId: string) {
    logger.info(
      `Request to revoke all tokens for User with id ${userId} successful on ${newDate}`,
    );

    await getConnection()
      .getRepository(User)
      .increment({ id: userId }, "tokenVersion", 1)
      .catch((err) => {
        logger.error(
          `Request to revoke all tokens for User with id ${userId} failed on ${newDate}. Details: ${err}`,
        );
      });

    return true;
  }

  /**
   * Mutation to LOGIN a user and send authentication
   * tokens.
   */
  @Mutation(() => LoginResponse)
  async login(
    @Arg("username") username: string,
    @Arg("password") password: string,
    @Ctx() { res }: ExpressContext,
  ): Promise<LoginResponse> {
    /**
     * Find user with username entered by user
     */
    const user = await User.findOne({ where: { username } });

    if (!user) {
      logger.error(`A person tried to login with an unidentified username.`);
      throw new Error("Could not find user with that username.");
    }

    /**
     * Compare password entered with bcrypt's compare function
     */
    const valid = await compare(password, user.password);

    if (!valid) {
      logger.error(`A person tried to login with an invalid password.`);
      throw new Error("You entered a wrong password.");
    }

    /**
     * All validations pass, login successful, send access and
     * refresh tokens to user on client-side.
     */
    logger.info(`@${username} logged in on ${newDate}`);

    /**
     * Send refresh token, cookie should be using httpOnly
     */
    logger.info(`Refresh and access token created for @${username} on ${newDate}`);
    SendRefreshToken(res, createRefreshToken(user));

    return {
      accessToken: createAccessToken(user),
    };
  }

  /**
   * Mutation to REGISTER a new ShadowCMS user,
   * validations both happen on client and server-side.
   */
  @Mutation(() => Boolean)
  async register(
    @Arg("username") username: string,
    @Arg("password") password: string,
    @Arg("role") role: UserRoles,
    @Arg("avatar", { nullable: true }) avatar: string,
    @Arg("byline", { nullable: true }) byline: string,
  ) {
    /**
     * Hash the password entered by the user
     */
    const hashedPassword = await hash(password, 12);

    try {
      /**
       * Insert new user to database if all validations pass
       */
      await User.insert({
        password: hashedPassword,
        username,
        role,
        avatar,
        byline,
      });
    } catch (err) {
      /**
       * Log any server errors
       */
      logger.error(
        `An error occured while trying to register a new user on ${newDate} 
         Details: ${err}`,
      );
      return false;
    }

    /**
     * Return true if all validations pass,
     * and log to server console that a new user was registered
     */
    logger.info(`New user registered on ${newDate} and was assigned as ${role}`);
    return true;
  }
}
