/**
 * Types for Heading UI Component
 *
 * @author ShadowCMS
 */

import { ReactNode } from 'react';

export type HeadingProps = {
  children?: ReactNode;
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};
