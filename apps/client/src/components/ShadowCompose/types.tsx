/**
 * Types for Shadow Compose
 *
 * @author D.R.S. for ShadowCMS
 */

import * as Y from 'yjs';
import { User } from '../../interfaces/User';

export type ShadowComposeProps = {
  provider?: any;
  doc?: Y.Doc;
  id: string;
  user?: User;
};
