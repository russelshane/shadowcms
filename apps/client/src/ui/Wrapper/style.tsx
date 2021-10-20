/**
 * Styles for Wrapper UI Component
 *
 * @author ShadowCMS
 */

import styled from 'styled-components';

export const WrapperContainer = styled.div({
  maxWidth: '1200px',
  width: '100%',
  height: 'auto',
  margin: '0 auto',
  display: 'flex',

  '@media screen and (max-width:1200px)': {
    maxWidth: '100%',
    padding: '10px 16px',
  },
});
