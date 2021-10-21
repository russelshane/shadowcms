/**
 * Styles for Grid UI Component
 * @author ShadowCMS
 */

import styled from 'styled-components';

export const GridContainer = styled.div({
  margin: 0,
  padding: 0,
  width: '100%',
  maxWidth: '1200px',
  display: 'grid',
  gridGap: '0px',
  gridTemplateColumns: 'auto auto auto auto',

  '&.withGap': {
    gridGap: '20px',
  },

  '&.full': {
    width: '100%',
    maxWidth: '100%',
  },

  '&.twocols': {
    gridTemplateColumns: 'auto auto',

    '@bp4': {
      gridTemplateColumns: 'auto',
    },
  },

  '&.threecols': {
    gridTemplateColumns: 'auto auto auto',

    '@bp1': {
      padding: '0 12px',
      gridTemplateColumns: 'auto auto auto',
    },

    '@bp2': {
      gridTemplateColumns: 'auto auto',
    },

    '@bp4': {
      gridTemplateColumns: 'auto',
    },
  },

  '@bp1': {
    padding: '0 12px',
    gridTemplateColumns: 'auto auto auto',
  },

  '@bp2': {
    gridTemplateColumns: 'auto auto',
  },

  '@bp4': {
    gridTemplateColumns: 'auto',
  },
});
