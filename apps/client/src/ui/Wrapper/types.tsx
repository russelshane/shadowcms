/**
 * Types for Wrapper UI Component
 *
 * @author ShadowCMS
 */

import { ReactNode } from 'react';

export type WrapperProps = {
  children?: ReactNode;
  maxWidth?: number | string;
  width?: number | string;
  height?: number | string;
  padding?: number | string;
  margin?: number | string;
  background?: string;
  border?: string;
  borderBottom?: string;
  borderTop?: string;
  borderRight?: string;
  borderLeft?: string;
  backgroundColor?: string;
  gridGap?: number | string;
  display?: 'flex' | 'block' | 'inherit';
  justifyContent?: 'space-between' | 'center' | 'flex-start' | 'flex-end';
  alignItems?: 'space-between' | 'center' | 'flex-start' | 'flex-end';
  flexDirection?: 'column' | 'row';
};
