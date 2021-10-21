/**
 * Badge UI Component
 *
 * @author ShadowCMS
 */

import React from 'react';
import { BadgeContainer } from './style';
import { BadgeProps } from './types';

const Badge: React.FC<BadgeProps> = ({ color, label }) => {
  return <BadgeContainer className={`${color && color}`}>{label}</BadgeContainer>;
};

export default Badge;
