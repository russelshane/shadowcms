/**
 * Primary/Default Routes Controller
 *
 * @author ShadowCMS
 */

import dayjs from 'dayjs';
import { Get, Controller } from 'routing-controllers';
import logger from '../util/logger';

@Controller('/')
export class PrimaryRouteController {
  @Get('/')
  public index(): string {
    logger.info(`Primary route requested on ${dayjs().format('MMMM D, YYYY hh:mm a')}`);
    return 'Hello World!';
  }
}
