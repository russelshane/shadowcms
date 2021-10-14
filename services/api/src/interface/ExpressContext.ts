/**
 * Types for Express Request and Response
 *
 * @author ShadowCMS
 */
import { Request, Response } from "express";

export interface ExpressContext {
  req: Request;
  res: Response;
  payload?: {
    userId: string;
    username: string;
    avatar: string;
    role: any;
    byline: string;
  };
}
