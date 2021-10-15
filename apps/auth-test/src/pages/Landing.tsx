/**
 * Landing Page -> Landing.tsx
 *
 * @author ShadowCMS
 */

import React, { useEffect } from 'react';
import Header from '../components/Header';
import { Heading, Pane, Text, Avatar } from 'evergreen-ui';
import ScreenLoader from '../components/ScreenLoader';
import { useGetUsersQuery } from '../generated/graphql';

const Landing: React.FC = () => {
  useEffect(() => {
    document.title = 'Home - ShadowCMS Authentication Security Testing';
  }, []);

  const { data, error, loading } = useGetUsersQuery();

  if (loading) {
    return <ScreenLoader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Pane
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding={20}
      flexDirection="column"
      gridGap="30px"
    >
      <Header />
      {data && (
        <React.Fragment>
          {data?.getUsers?.map((val: any, index: any) => (
            <Pane
              display="flex"
              key={index}
              flexDirection="column"
              gridGap="10px"
              width="300px"
              background="lightgray"
              padding={16}
              borderRadius={5}
            >
              <Avatar src={val.avatar} />
              <Heading>{val.byline}</Heading>
              <Text>@{val.username}</Text>
            </Pane>
          ))}
        </React.Fragment>
      )}
    </Pane>
  );
};

export default Landing;
