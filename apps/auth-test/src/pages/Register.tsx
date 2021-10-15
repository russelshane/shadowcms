/**
 * Register Page -> Register.tsx
 *
 * @author ShadowCMS
 */

import { Pane, Select, Text, TextInput, Button } from 'evergreen-ui';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useRegisterMutation } from '../generated/graphql';

const Register: React.FC = () => {
  useEffect(() => {
    document.title = 'Register - ShadowCMS Authentication Security Testing';
  }, []);

  const [role, setRole] = useState('admin');
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');
  const [byline, setByline] = useState('');
  const [password, setPassword] = useState('');

  const [register] = useRegisterMutation();

  console.log(role);

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
        }}
      >
        <Text>Username</Text>
        <TextInput
          placeholder="Enter a unique username..."
          marginBottom={20}
          width="500px"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <Text>Password</Text>
        <TextInput
          type="password"
          placeholder="Enter a secure password..."
          marginBottom={20}
          width="500px"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <Text>Byline</Text>
        <TextInput
          placeholder="Enter a newsroom byline..."
          marginBottom={20}
          width="500px"
          value={byline}
          onChange={(e) => setByline(e.target.value)}
        />
        <br />
        <Text>Avatar</Text>
        <TextInput
          placeholder="Enter a link to your avatar..."
          marginBottom={20}
          width="500px"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
        <br />
        <Text>Pick a Role</Text>
        <Select value={role} onChange={(event) => setRole(event.target.value)}>
          <option value="admin" defaultValue="admin">
            Admin
          </option>
          <option value="reporter">Reporter</option>
        </Select>
        <Button type="submit">Register</Button>
      </form>
    </Pane>
  );
};

export default Register;
