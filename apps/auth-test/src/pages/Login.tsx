/**
 * Login Page -> Login.tsx
 *
 * @author ShadowCMS
 */

import { Button, Flex, Text } from 'rebass';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useLoginMutation } from '../generated/graphql';
import { useHistory } from 'react-router';
import { setAccessToken } from '../safe/accessToken';

const Login: React.FC = () => {
  useEffect(() => {
    document.title = 'Login - ShadowCMS Authentication Security Testing';
  }, []);

  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation();

  return (
    <Flex
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding={20}
      flexDirection="column"
    >
      <Header />
      <hr />
      <Text>Login Page</Text>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const response = await login({
            variables: {
              username,
              password,
            },
          });

          console.log(response);

          if (response && response.data) {
            await setAccessToken(response.data.login.accessToken);
          }

          history.push('/');
        }}
      >
        <Text>Username</Text>
        <input
          placeholder="Enter a unique username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: 30, width: '300px' }}
        />
        <br />
        <Text>Password</Text>
        <input
          type="password"
          placeholder="Enter a secure password..."
          style={{ marginBottom: 30, width: '300px' }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <Button type="submit" style={{ background: '#777' }}>
          Login
        </Button>
      </form>
    </Flex>
  );
};

export default Login;
