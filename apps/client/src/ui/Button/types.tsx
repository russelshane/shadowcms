/**
 * Types for Button UI Component
 *
 * @author ShadowCMS
 */

import { ReactNode } from 'react';

export type ButtonProps = {
  children?: ReactNode;
  outline?: boolean;
  color?: 'primary' | 'danger' | 'warning' | 'success';
  onClick?: any;
  icon?: ReactNode /* Icons are attached as components: <MyIcon /> */;
};
