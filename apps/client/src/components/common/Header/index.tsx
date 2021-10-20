/**
 * Header Component
 *
 * @author ShadowCMS
 */

import React from 'react';
import MockUser from '../../../mocks/user';
import COLORS from '../../../styles/GlobalColors';
import Container from '../../../ui/Container';
import Logo from '../../../ui/Logo';
import UserTab from '../../../ui/UserTab';
import Wrapper from '../../../ui/Wrapper';
import Navigation from '../Navigation';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = () => {
  return (
    <Container height={80} borderBottom={`1px solid ${COLORS.borders}`}>
      <Wrapper
        height="100%"
        justifyContent="space-between"
        alignItems="center"
        display="flex"
        padding="10px 0"
      >
        <Container gridGap="40px">
          <Logo size="md" />
          <Navigation direction="row" />
        </Container>
        <UserTab user={MockUser} />
      </Wrapper>
    </Container>
  );
};

export default Header;
