/**
 * @description Connection to PostgreSQL Database
 * @author ShadowCMS
 */

import logger from '../util/logger';
import Koa, { DefaultState, DefaultContext } from 'koa';
import { createConnection, Connection } from 'typeorm';
import { config } from 'dotenv';

/**
 * Initialize API Secrets and custom
 * ShadowCMS Logger
 */
config();
const { DATABASE_URL } = process.env;

/**
 * Function to connect to PostgreSQL Database.
 * Must be a connection string using typeorm.
 */
const connectPostgres = async (api: Koa<DefaultState, DefaultContext>): Promise<void> => {
  const connection: Connection = await createConnection({
    type: 'postgres',
    url: DATABASE_URL as string,
    ssl: {
      rejectUnauthorized: false,
    },
    entities: ['dist/entities/*.js'],
    synchronize: true,
    logging: true,
  });

  /**
   * Create connection
   */
  await connection
    .synchronize(true)
    .then(() => {
      logger.info(`🟢 Connected to PostgreSQL Database!`);
    })
    .catch((err) => {
      logger.error(`🚨 Failed to synchronize with PostgreSQL Database. Details: `, err);
    });

  /**
   * Pass database connection as koa context
   */
  api.context.db = connection;
};

export default connectPostgres;
