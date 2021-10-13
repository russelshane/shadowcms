/**
 * TypeORM Configuration for Shadow CMS API
 *
 * @author ShadowCMS
 */

import { config } from 'dotenv';

config();

const { DATABASE_URL } = process.env;

const ORMCONFIG = {
  type: 'postgres',
  url: DATABASE_URL as string,
  synchronize: true,
  logging: true,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: ['src/entities/**/*.ts'],
  migrations: ['src/migrations/**/*.ts'],
  subscribers: ['src/subscribers/**/*.ts'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
    subscribersDir: 'src/subscribers',
  },
};

export default ORMCONFIG;
