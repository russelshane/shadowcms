import React from 'react';
import ApolloClient from 'apollo-boost';
import App from './App';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import './styles/main.css';
import { getAccessToken } from './safe/accessToken';

const apolloClient: any = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  credentials: 'include',
  request: (operation) => {
    const accessToken = getAccessToken();
    console.log(accessToken);
    if (accessToken) {
      operation.setContext({
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      });
    }
  },
});

render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
