import dotenv from "dotenv";
import { User } from "./entity/User";
import { sign } from "jsonwebtoken";
import { Response } from "express";

dotenv.config();

export const createAccessToken = (user: User) => {
  return sign(
    {
      userId: user.id,
      username: user.username,
      avatar: user.avatar,
      role: user.role,
      byline: user.byline,
    },
    process.env.SESSION_SECRET,
    {
      expiresIn: "15m",
    },
  );
};

export const createRefreshToken = (user: User) => {
  return sign(
    {
      userId: user.id,
      username: user.username,
      avatar: user.avatar,
      role: user.role,
      byline: user.byline,
      tokenVersion: user.tokenVersion,
    },
    process.env.REFRESH_SECRET,
    {
      expiresIn: "7d",
    },
  );
};

export const SendRefreshToken = (res: Response, token: string) => {
  res.cookie("jid", token, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  });
};
