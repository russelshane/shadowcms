/**
 * Function to connect to the PostgreSQL Database
 *
 * @author ShadowCMS
 */

import dotenv from "dotenv";
import logger from "../util/logger";
import { createConnection } from "typeorm";

dotenv.config();

const ConnectPostgres = async () => {
  const { DATABASE_URL } = process.env;

  /**
   * Attempt a connection to the PostgreSQL database
   */
  await createConnection({
    type: "postgres",
    url: DATABASE_URL as string,
    ssl: {
      rejectUnauthorized: false,
    },
    entities: ["dist/entity/*.js"],
    migrations: ["dist/migration/*.js"],
    synchronize: true,
    logging: false,
  })
    .then(() => {
      logger.info(`🟢 API is connected to PostgreSQL Database!`);
    })
    .catch((error) => {
      logger.error(
        `Error while trying to connect to PostgreSQL Database. Details: ${error}`,
      );
    });
};

export default ConnectPostgres;
