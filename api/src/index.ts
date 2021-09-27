/**
 * Updated reusable Node and GraphQL API for
 * Shadow C.M.S. clients
 *
 * @author ShadowCMS
 */

import Koa, { DefaultContext, DefaultState } from "koa";
import Router from "koa-router";
import DefaultAPIRoute from "./routes/default-route";
import connectPostgres from "./services/connect-postgres";
import Logger from "./utilities/logger";

/**
 * Initialize ShadowCMS Logger
 */
const logger = Logger();

const launch = async () => {
  /**
   * Initialize API Environment
   */
  const PORT = process.env.PORT || 5000;
  const api: Koa<DefaultState, DefaultContext> = new Koa();
  const router: Router = new Router();

  /**
   * REST / Node Routes
   */
  router.get("/", DefaultAPIRoute);

  /**
   * Get API Middlewares
   */
  api.use(router.routes()).use(router.allowedMethods());

  /**
   * Connect to Databases
   */
  await connectPostgres(api);

  /**
   * Initialize API
   */
  api.listen(PORT).on("listening", () => {
    logger.info("🟢 Connected to all databases...");

    /**
     * Signal that the API is running once all databases
     * are connected successfully.
     */
    setTimeout(() => {
      logger.info("🟢 ShadowCMS API is running. 🚀");
    }, 1000);
  });
};

/**
 * Start API
 */
launch().catch((err) => {
  logger.error(`🚨 Failed to start API. Details: `, err);
});
