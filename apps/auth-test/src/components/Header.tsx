/**
 * Header Component
 *
 * @author ShadowCMS
 */

import React from 'react';
import { Flex, Button, Heading, Text } from 'rebass';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Flex
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Flex display="flex">
        <Link to="/">
          <Button variant="primary" style={{ background: '#777' }} marginRight={10}>
            Home
          </Button>
        </Link>
        <Link to="/register">
          <Button marginRight={10} style={{ background: '#777' }}>
            Register
          </Button>
        </Link>
        <Link to="/login">
          <Button style={{ background: '#777' }}>Login</Button>
        </Link>
      </Flex>
      <br />
      <Heading>Authentication Security Testing</Heading>
      <Text mt={1} mb={5}>
        Shadow CMS
      </Text>
    </Flex>
  );
};

export default Header;
