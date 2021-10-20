/**
 * Styles for User Tab UI Component
 *
 * @author ShadowCMS
 */

import styled from 'styled-components';
import COLORS from '../../styles/GlobalColors';

export const UserAvatar = styled.div({
  width: 32,
  height: 32,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  border: `1px solid ${COLORS.borders}`,
  borderRadius: '100%',
  cursor: 'pointer',
});

export const UserDropDown = styled.div({
  zIndex: 3,
  padding: 20,
  width: 180,
  top: 79,
  position: 'absolute',
  background: COLORS.background,
  flexDirection: 'column',
  gridGap: '20px',
  border: `1px solid ${COLORS.borders}`,
  marginLeft: '-60px',
  display: 'none',

  '&.active': {
    display: 'flex',
  },
});

export const UserName = styled.span({
  fontSize: 13.5,
  letterSpacing: '0.25px',
  fontFamily: 'Satoshi, sans-serif',
  color: COLORS.foreground,
  cursor: 'pointer',

  '&:hover': {
    color: COLORS.muted,
  },
});
