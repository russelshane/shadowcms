/**
 * Custom ShadowCMS API Service Logging Tool,
 * Logs all requests, responses, errors, etc. to the console.
 * All code should not be using console.log()
 *
 * @author ShadowCMS
 */

import memoize from 'micro-memoize';
import pino from 'pino';

export type ShadowLogger = pino.Logger;

const logger = memoize(
  (name = 'shadowcms') =>
    pino({
      name,
      enabled: true,
      prettyPrint: {
        ignore: 'pid, hostname',
        translateTime: 'HH:MM:ss',
      },
    }) as ShadowLogger,
)();

export default logger;
