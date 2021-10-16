/**
 * Me Page -> Me.tsx
 *
 */

import React from 'react';
import { Flex, Text } from 'rebass';
import Header from '../components/Header';
import ScreenLoader from '../components/ScreenLoader';
import { useGetUserInfoQuery } from '../generated/graphql';

const Me: React.FC = () => {
  const { data, loading, error } = useGetUserInfoQuery();

  if (loading) {
    return <ScreenLoader />;
  }

  if (error) {
    console.log(error);
    return (
      <Text>
        {error.message ===
          'GraphQL error: You do not have permission to access this route.' && (
          <Text>
            You are not logged in. <a href="/login">Login Here</a>
          </Text>
        )}
      </Text>
    );
  }

  if (!data) {
    return <div>no data</div>;
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
      {data && <Text>{JSON.stringify(data.me)}</Text>}
    </Flex>
  );
};

export default Me;
