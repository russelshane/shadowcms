/**
 * Login Page -> Login.tsx
 *
 * @author ShadowCMS
 */

import { Pane, Text } from 'evergreen-ui';
import React, { useEffect } from 'react';
import Header from '../components/Header';

const Login: React.FC = () => {
  useEffect(() => {
    document.title = 'Login - ShadowCMS Authentication Security Testing';
  }, []);

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
      <hr />
      <Text>Login Page</Text>
    </Pane>
  );
};

export default Login;
