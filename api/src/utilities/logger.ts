/**
 * @description Custom API Logger
 * @author ShadowCMS
 */

import memoize from "micro-memoize";
import pino from "pino";

export type ShadowLogger = pino.Logger;

export default memoize(
  (name = "shadow") =>
    pino({
      name,
      enabled: true,
      prettyPrint: {
        ignore: "pid, hostname",
        translateTime: "HH:MM:ss",
      },
    }) as ShadowLogger,
);
