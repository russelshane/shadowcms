/**
 * Styles for Logo Component
 *
 * @author ShadowCMS
 */

import styled from 'styled-components';

export const LogoContainer = styled.div({
  width: 40,
  height: 40,
  boxSizing: 'border-box',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundImage:
    'url(https://ik.imagekit.io/drs/shadowcms/favicon_kbWy-5k14M.svg?updatedAt=1628769089165)',

  '&.xs': {
    width: 20,
    height: 20,
  },

  '&.sm': {
    width: 30,
    height: 30,
  },

  '&.md': {
    width: 40,
    height: 40,
  },

  '&.lg': {
    width: 60,
    height: 60,
  },
});
