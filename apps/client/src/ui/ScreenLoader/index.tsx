/**
 * Screen Loader UI Component
 *
 * @author ShadowCMS
 */

import React from 'react';
import { LayoutContainer } from '../Layout/style';
import { ScreenLoaderContainer, SpinnerContainer } from './style';

const ScreenLoader: React.FC = () => {
  return (
    <LayoutContainer>
      <ScreenLoaderContainer>
        <SpinnerContainer />
      </ScreenLoaderContainer>
    </LayoutContainer>
  );
};

export default ScreenLoader;
