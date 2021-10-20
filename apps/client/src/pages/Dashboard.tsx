/**
 * C.M.S. Client Dashboard Page
 *
 * @author ShadowCMS
 */

import React from 'react';
import loadable from '@loadable/component';

const Layout = loadable(() => import('../ui/Layout'));

const Dashboard: React.FC = () => {
  return (
    <Layout title="Dashboard - Shadow">
      <h1>Hello world</h1>
    </Layout>
  );
};

export default Dashboard;
