/**
 * @description Default / Landing API Route displays forbidden
 * @author ShadowCMS
 */

import { ParameterizedContext, DefaultState, DefaultContext } from "koa";

const DefaultAPIRoute = (ctx: ParameterizedContext<DefaultState, DefaultContext>) => {
  /**
   * Sends forbidden request status code
   */
  ctx.status = 403;
};

export default DefaultAPIRoute;
