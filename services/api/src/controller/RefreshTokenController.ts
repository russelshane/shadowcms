/**
 * Refresh token route controller
 *
 * @author ShadowCMS
 */

import dayjs from "dayjs";
import logger from "../util/logger";
import { verify } from "jsonwebtoken";
import { User } from "../entity/User";
import { createAccessToken, createRefreshToken, SendRefreshToken } from "../auth";

const newDate = dayjs().format("MMMM, D, YYYY HH:mm:ss");

export const RefreshTokenController = async (req, res) => {
  const token = req.cookies.jid;
  logger.info(`Cookie parse requested on ${newDate}`);

  if (!token) {
    logger.info(
      `Client tried to get a refresh token without an access token on ${newDate}`,
    );
    return res.send({ ok: false, accessToken: "" });
  }

  let payload: any = null;
  try {
    payload = verify(token, process.env.REFRESH_SECRET);
    logger.info(`Request for a refresh token successful on ${newDate}.`);
  } catch (err) {
    logger.info(`Request for a refresh token failed on ${newDate}. Details: ${err}`);
    return res.send({ ok: false, accessToken: "" });
  }

  /* Token is valid */
  const user = await User.findOne({ id: payload.userId });

  if (!user) {
    logger.info(
      `User with id ${payload.userId} not found despite having a valid token on ${newDate}`,
    );
    return res.send({ ok: false, accessToken: "" });
  }

  if (user.tokenVersion !== payload.tokenVersion) {
    logger.info(
      `User with id ${payload.userId} has a token version mismatch on ${newDate}`,
    );
    return res.send({ ok: false, accessToken: "" });
  }

  /**
   * New Refresh Token
   */
  SendRefreshToken(res, createRefreshToken(user));

  return res.send({ ok: true, accessToken: createAccessToken(user) });
};
