/**
 * Styles for Navigation Component
 *
 * @author ShadowCMS
 */

import styled from 'styled-components';
import COLORS from '../../../styles/GlobalColors';

export const NavItem = styled.span({
  fontSize: '0.865rem',
  fontFamily: 'Satoshi, sans-serif',
  fontWeight: 500,
  color: COLORS.foreground,
  display: 'block',
  cursor: 'pointer',
  transition: '0.1s ease-in-out',

  '&:hover': {
    color: COLORS.muted,
  },
});
