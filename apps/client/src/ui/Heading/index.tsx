/**
 * Heading UI Component
 *
 * @author ShadowCMS
 */

import React from 'react';
import { HeadingMain } from './style';
import { HeadingProps } from './types';

const Heading: React.FC<HeadingProps> = ({ children, size }) => {
  return <HeadingMain className={`${size ? size : undefined}`}>{children}</HeadingMain>;
};

export default Heading;
