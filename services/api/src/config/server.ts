/**
 * Server Configuration and Constants
 *
 * @author ShadowCMS
 */

import { config } from 'dotenv';

config();

const CONFIG = {
  PORT: process.env.PORT,
  DISABLE_LOGGING: process.env.DISABLE_LOGGING,
};

export default CONFIG;
