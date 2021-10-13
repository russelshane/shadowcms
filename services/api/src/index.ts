/**
 * Updated reusable Node and GraphQL API for
 * Shadow C.M.S. clients
 *
 * @author ShadowCMS
 */

import 'reflect-metadata';
import connectPostgres from './services/ConnectPostgres';
import logger from './util/logger';
import Koa, { DefaultContext, DefaultState } from 'koa';
import { createKoaServer } from 'routing-controllers';
import { PrimaryRouteController } from './controllers/PrimaryRouteController';

const LAUNCH = async () => {
  /**
   * Initialize API Environment
   */
  const PORT = process.env.PORT || 5000;
  const api: Koa<DefaultState, DefaultContext> = createKoaServer({
    controllers: [PrimaryRouteController],
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
  api.listen(PORT).on('listening', () => {
    logger.info('🟢 Connected to all databases...');

    /**
     * Signal that the API is running once all databases
     * are connected successfully.
     */
    setTimeout(() => {
      logger.info('🟢 ShadowCMS API is running. 🚀');
    }, 1000);
  });
};

/**
 * Launch API
 */
LAUNCH().catch((err) => {
  logger.error(`🚨 Failed to start API. Details: `, err);
});
