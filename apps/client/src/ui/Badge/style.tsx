/**
 * Styles for Badge UI Component
 *
 * @author ShadowCMS
 */

import styled from 'styled-components';
import COLORS from '../../styles/GlobalColors';

export const BadgeContainer = styled.span({
  borderRadius: 5,
  margin: 0,
  padding: '0.25em 0.5em',
  fontFamily: 'Satoshi, sans-serif',
  color: '#fff',
  display: 'flex',
  fontSize: '0.780rem',
  background: COLORS.primary,
  userSelect: 'none',
  cursor: 'default',

  '&.danger': {
    background: COLORS.danger,
  },

  '&.warning': {
    background: COLORS.warning,
  },

  '&.success': {
    background: COLORS.success,
  },
});
