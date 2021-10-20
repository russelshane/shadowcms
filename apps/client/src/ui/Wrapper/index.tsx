/**
 * Wrapper UI Component
 *
 * @author ShadowCMS
 */

import React from 'react';
import { WrapperContainer } from './style';
import { WrapperProps } from './types';

const Wrapper: React.FC<WrapperProps> = ({
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
}) => {
  return (
    <WrapperContainer
      style={{
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
      }}
    >
      {children}
    </WrapperContainer>
  );
};

export default Wrapper;
