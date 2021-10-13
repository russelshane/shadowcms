/**
 * @description Global TypeScript API Interfaces
 * @author ShadowCMS
 */

import { Context } from "koa";
import { Connection } from "typeorm";

export interface CTX extends Context {
  db: Connection;
}
