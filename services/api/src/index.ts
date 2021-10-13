/**
 * Main codebase for the API Service. This code may be
 * pushed for production.
 *
 * @author ShadowCMS
 */

import CONFIG from './config/server';
import logger from './utilities/logger';
import express, { Express } from 'express';

const LAUNCH = async () => {
  /* New Express App Instance */
  const api: Express = express();
  const PORT = CONFIG.PORT || 5333;

  /* Initialize API Middlewares */
  api.use(express.json());

  /* Initialize API and Connect to Databases */
  api.listen(PORT, async () => {
    logger.info(`🚀 Shadow CMS API is running! Current Port: ${PORT}`);
  });
};

/* Launch API */
LAUNCH().catch((err) => {
  logger.error(`🔴 Error while trying to launch server. Details: ${err}`);
});
