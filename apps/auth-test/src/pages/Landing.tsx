/**
 * Landing Page -> Landing.tsx
 *
 * @author ShadowCMS
 */

import React, { useEffect } from 'react';
import Header from '../components/Header';
import { Heading, Box, Flex, Text, Image } from 'rebass';
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
    console.log(error);
    return <p>Error, check console.</p>;
  }

  return (
    <Flex
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding={20}
      flexDirection="column"
    >
      <Header />
      {data && (
        <React.Fragment>
          {data.getUsers.map((val: any, index: any) => (
            <Box
              display="flex"
              key={index}
              flexDirection="column"
              width="300px"
              backgroundColor="#d9d9d9"
              padding={16}
              mb={3}
            >
              <Image
                src={val.avatar}
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 9999,
                }}
              />
              <br />
              <Heading>{val.byline}</Heading>
              <br />
              <Text>@{val.username}</Text>
            </Box>
          ))}
        </React.Fragment>
      )}
    </Flex>
  );
};

export default Landing;
