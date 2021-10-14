import dotenv from "dotenv";
import { User } from "./entity/User";
import { sign } from "jsonwebtoken";

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
    },
    process.env.REFRESH_SECRET,
    {
      expiresIn: "7d",
    },
  );
};
