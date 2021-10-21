/**
 * Navigation Component
 *
 * @author ShadowCMS
 */

import React from 'react';
import Container from '../../../ui/Container';
import { Link } from 'react-router-dom';
import { NAVIGATION_ITEMS } from '../../../constants/navigation';
import { NavItem } from './style';
import { NavigationProps } from './types';

const Navigation: React.FC<NavigationProps> = ({ direction }) => {
  return (
    <Container
      display="flex"
      flexDirection={direction}
      gridGap="20px"
      width="auto"
      alignItems="center"
    >
      {NAVIGATION_ITEMS.map((val, index) => (
        <Link to={val.path} key={index}>
          <NavItem>{val.label}</NavItem>
        </Link>
      ))}
    </Container>
  );
};

export default Navigation;
