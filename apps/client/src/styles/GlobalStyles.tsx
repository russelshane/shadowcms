/**
 * Global Styles for C.M.S. Client
 *
 * @author ShadowCMS
 */

import { createGlobalStyle } from 'styled-components';
import COLORS from './GlobalColors';

const GlobalStyles = createGlobalStyle({
  'html, body': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    backgroundColor: COLORS.background,
    fontFamily: 'Roboto, sans-serif',
  },

  '*': {
    boxSizing: 'border-box',
    margin: 0,
  },

  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

export default GlobalStyles;
