/**
 * Wrapper UI Component
 *
 * @author ShadowCMS
 */

import React from 'react';
import { ContainerMain } from './style';
import { ContainerProps } from './types';

const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth,
  width,
  height,
  padding,
  margin,
  background,
  border,
  borderBottom,
  borderLeft,
  borderRight,
  borderTop,
  display,
  justifyContent,
  alignItems,
  flexDirection,
  backgroundColor,
  gridGap,
}) => {
  return (
    <ContainerMain
      style={{
        gridGap,
        maxWidth,
        width,
        height,
        padding,
        margin,
        background,
        border,
        backgroundColor,
        borderBottom,
        borderLeft,
        borderRight,
        borderTop,
        display,
        justifyContent,
        alignItems,
        flexDirection,
      }}
    >
      {children}
    </ContainerMain>
  );
};

export default Container;
