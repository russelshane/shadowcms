/**
 * Styles for Screen Loader UI Component
 *
 * @author ShadowCMS
 */

import styled from 'styled-components';

export const ScreenLoaderContainer = styled.div({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const SpinnerContainer = styled.div({
  height: 60,
  width: 60,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundImage: 'url(/spinner.svg)',
});
