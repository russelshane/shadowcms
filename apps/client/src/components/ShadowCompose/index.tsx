/**
 * Shadow Compose v4.0.1
 *
 * @author D.R.S. for ShadowCMS
 */

import React from 'react';
import loadable from '@loadable/component';
import { ShadowComposeProps } from './types';

/* Dynamic Components */
const Container = loadable(() => import('../../ui/Container'));

const ShadowCompose: React.FC<ShadowComposeProps> = ({ id }) => {
  return (
    <Container flexDirection="column">
      <h1>You are editing {id}</h1>
    </Container>
  );
};

export default ShadowCompose;
