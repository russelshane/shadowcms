/**
 * Grid UI Component
 *
 * @author ShadowCMS
 */

import React from 'react';
import Container from '../Container';
import { GridContainer } from './style';
import { GridProps } from './types';

const Grid: React.FC<GridProps> = ({ columns, children, gap, fullWidth }) => {
  return (
    <Container>
      {!columns && (
        <GridContainer className={`${gap && 'withGap'} ${fullWidth && 'full'}`}>
          {children}
        </GridContainer>
      )}

      {columns === 2 && (
        <GridContainer className={`${gap && 'withGap'} ${fullWidth && 'full'} twocols`}>
          {children}
        </GridContainer>
      )}

      {columns === 3 && (
        <GridContainer className={`${gap && 'withGap'} ${fullWidth && 'full'} threecols`}>
          {children}
        </GridContainer>
      )}

      {columns === 4 && (
        <GridContainer className={`${gap && 'withGap'} ${fullWidth && 'full'}`}>
          {children}
        </GridContainer>
      )}
    </Container>
  );
};

export default Grid;
