/**
 * C.M.S. Client Landing/Authentication Page
 *
 * @author ShadowCMS
 */

import React from 'react';
import loadable from '@loadable/component';

const Layout = loadable(() => import('../ui/Layout'));

const Landing: React.FC = () => {
  return (
    <Layout title="Login - Shadow">
      <h1>hello world</h1>
    </Layout>
  );
};

export default Landing;
