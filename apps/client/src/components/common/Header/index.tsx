/**
 * Header Component
 *
 * @author ShadowCMS
 */

import React from 'react';
import COLORS from '../../../styles/GlobalColors';
import Container from '../../../ui/Container';
import Wrapper from '../../../ui/Wrapper';
import { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = () => {
  return (
    <Container height={80} borderBottom={`1px solid ${COLORS.borders}`}>
      <Wrapper height="100%" alignItems="center" display="flex" padding="10px 0">
        <h2>logo</h2>
      </Wrapper>
    </Container>
  );
};

export default Header;
