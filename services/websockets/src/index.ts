/**
 * @description WebSockets Server Config for System Collaborations
 * @author ShadowCMS
 */

import dotenv from "dotenv";
import Logger from "./utilities/logger";
import { Server } from "@hocuspocus/server";
import { RocksDB } from "@hocuspocus/extension-rocksdb";

dotenv.config();

const PORT: any = process.env.PORT || 5000;

const logger = Logger();

/**
 * Using RocksDB temporarily as collaborative document
 * store in progress.
 */
const server = Server.configure({
  port: PORT,
  extensions: [new RocksDB({ path: "./database" })],
});

/**
 * Run ShadowCMS websockets server
 */
server
  .listen()
  .then(() => {
    logger.info("🟢 Shadow Websockets server running...");
  })
  .catch((err) => {
    logger.error(`🚨 Error while trying to run Shadow WebSockets server. Details: `, err);
  });
