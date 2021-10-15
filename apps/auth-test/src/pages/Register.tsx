/**
 * Register Page -> Register.tsx
 *
 * @author ShadowCMS
 */

import { Flex, Text, Button } from 'rebass';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useRegisterMutation } from '../generated/graphql';
import { useHistory } from 'react-router';

const Register: React.FC = () => {
  useEffect(() => {
    document.title = 'Register - ShadowCMS Authentication Security Testing';
  }, []);

  const history = useHistory();
  const [role, setRole] = useState('admin');
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');
  const [byline, setByline] = useState('');
  const [password, setPassword] = useState('');

  const [register] = useRegisterMutation();

  console.log(role);

  return (
    <Flex
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding={20}
      flexDirection="column"
    >
      <Header />
      <Text>Register Page</Text>

      <hr />

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const response = await register({
            variables: {
              role,
              avatar,
              username,
              byline,
              password,
            },
          });

          console.log(response);

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
        <Text>Byline</Text>
        <input
          placeholder="Enter a newsroom byline..."
          style={{ marginBottom: 30, width: '300px' }}
          value={byline}
          onChange={(e) => setByline(e.target.value)}
        />
        <br />
        <Text>Avatar</Text>
        <input
          placeholder="Enter a link to your avatar..."
          style={{ marginBottom: 30, width: '300px' }}
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
        <br />
        <Text>Pick a Role</Text>
        <select value={role} onChange={(event) => setRole(event.target.value)}>
          <option value="admin" defaultValue="admin">
            Admin
          </option>
          <option value="reporter">Reporter</option>
        </select>
        <br />
        <br />
        <Button type="submit" marginRight={10} style={{ background: '#777' }}>
          Register
        </Button>
      </form>
    </Flex>
  );
};

export default Register;
