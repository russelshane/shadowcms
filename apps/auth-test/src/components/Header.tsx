/**
 * Header Component
 *
 * @author ShadowCMS
 */

import React from 'react';
import { Pane, Heading, Text, Button } from 'evergreen-ui';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Pane display="flex" alignItems="center" flexDirection="column" gridGap="10px">
      <Pane display="flex" gridGap="10px">
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/register">
          <Button>Register</Button>
        </Link>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </Pane>
      <Heading size={800}>Authentication Security Testing</Heading>
      <Text>Shadow CMS</Text>
    </Pane>
  );
};

export default Header;
