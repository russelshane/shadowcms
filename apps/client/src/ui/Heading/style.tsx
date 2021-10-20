/**
 * Styles for Heading UI Component
 *
 * @author ShadowCMS
 */

import styled from 'styled-components';
import COLORS from '../../styles/GlobalColors';

export const HeadingMain = styled.div({
  margin: 0,
  padding: 0,
  fontSize: 32,
  fontFamily: 'Satoshi, sans-serif',
  color: COLORS.foreground,
  fontWeight: 500,

  '&.h6': {
    fontSize: 14,
  },

  '&.h5': {
    fontSize: 18,
  },

  '&.h4': {
    fontSize: 24,
  },

  '&.h3': {
    fontSize: 32,
  },

  '&.h2': {
    fontSize: 48,
  },

  '&.h1': {
    fontSize: 60,
  },
});
