/**
 * Updated reusable Node and GraphQL API for
 * Shadow C.M.S. clients
 *
 * @author ShadowCMS
 */

import "reflect-metadata";
import Koa, { DefaultContext, DefaultState } from "koa";
import connectPostgres from "./services/connect-postgres";
import Logger from "./utilities/logger";
import { createKoaServer } from "routing-controllers";
import { UsersController } from "./controllers/users.controller";

/**
 * Initialize ShadowCMS Logger
 */
const logger = Logger();

const launch = async () => {
  /**
   * Initialize API Environment
   */
  const PORT = process.env.PORT || 5000;
  const api: Koa<DefaultState, DefaultContext> = createKoaServer({
    controllers: [UsersController],
  });

  /**
   * Connect to Databases
   */
  await connectPostgres(api).catch((err) => {
    logger.error(err);
  });

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
