/**
 * Verify if the user is authenticated with
 * this authentication middleware
 *
 * @author ShadowCMS
 */

import { verify } from "jsonwebtoken";
import { ExpressContext } from "../interface/ExpressContext";
import { MiddlewareFn } from "type-graphql";
import logger from "../util/logger";

export const isAuth: MiddlewareFn<ExpressContext> = ({ context }, next) => {
  const authorization = context.req.headers["authorization"];

  if (!authorization) {
    throw new Error("You do not have permission to access this route.");
  }

  try {
    const token = authorization.split(" ")[1];
    const payload = verify(token, process.env.SESSION_SECRET);
    context.payload = payload as any;
  } catch (err) {
    logger.error(
      `Unauthenticated user tried to access a protected GraphQL Route or for another reason. Details: ${err}`,
    );

    throw new Error("You do not have permission to access this route.");
  }

  return next();
};
