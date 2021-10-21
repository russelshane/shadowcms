/**
 * C.M.S. Client Dashboard Page
 *
 * @author ShadowCMS
 */

import React from 'react';
import loadable from '@loadable/component';
import MockArticles from '../mocks/articles';
import { Link } from 'react-router-dom';

const Layout = loadable(() => import('../ui/Layout'));
const Header = loadable(() => import('../components/common/Header'));
const Wrapper = loadable(() => import('../ui/Wrapper'));
const Heading = loadable(() => import('../ui/Heading'));
const Grid = loadable(() => import('../ui/Grid'));
const Card = loadable(() => import('../ui/Card'));
const Container = loadable(() => import('../ui/Container'));

const Dashboard: React.FC = () => {
  return (
    <Layout title="Dashboard - Shadow">
      <Header />
      <Wrapper margin="40px auto" flexDirection="column" gridGap="20px">
        <Heading size="h3">Dashboard</Heading>
        <Container flexDirection="column" gridGap="20px">
          <Heading size="h6">INCOMING</Heading>
          <Grid gap>
            {MockArticles.map((val, index) => (
              <Link
                to={`/doc/${val.docId}/editing`}
                style={{ display: 'flex' }}
                key={index}
              >
                <Card
                  key={index}
                  tags={val.status}
                  title={val.headline}
                  description={val.summary}
                  date={val.updatedAt}
                  image={val.image}
                  id={val.docId}
                />
              </Link>
            ))}
          </Grid>
        </Container>
        <Container flexDirection="column" gridGap="20px" margin="20px 0">
          <Heading size="h4">Published</Heading>
          <Grid gap>
            {MockArticles.map((val, index) => (
              <Link
                to={`/doc/${val.docId}/editing`}
                style={{ display: 'flex' }}
                key={index}
              >
                <Card
                  key={index}
                  tags={['published']}
                  title={val.headline}
                  description={val.summary}
                  date={val.updatedAt}
                  image={val.image}
                  id={val.docId}
                />
              </Link>
            ))}
          </Grid>
        </Container>
      </Wrapper>
    </Layout>
  );
};

export default Dashboard;
