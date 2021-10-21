/**
 * Types for Grid UI Component
 *
 * @author ShadowCMS
 */

import { ReactNode } from 'react';

export type GridProps = {
  gap?: boolean;
  fullWidth?: boolean;
  columns?: 2 | 3 | 4;
  children?: ReactNode;
};
