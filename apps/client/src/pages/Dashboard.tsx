/**
 * C.M.S. Client Dashboard Page
 *
 * @author ShadowCMS
 */

import React from 'react';
import loadable from '@loadable/component';

const Layout = loadable(() => import('../ui/Layout'));
const Header = loadable(() => import('../components/common/Header'));
const Wrapper = loadable(() => import('../ui/Wrapper'));
const Heading = loadable(() => import('../ui/Heading'));

const Dashboard: React.FC = () => {
  return (
    <Layout title="Dashboard - Shadow">
      <Header />
      <Wrapper margin="40px auto">
        <Heading size="h4">Dashboard</Heading>
      </Wrapper>
    </Layout>
  );
};

export default Dashboard;
