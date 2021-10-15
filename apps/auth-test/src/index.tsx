import React from 'react';
import ApolloClient from 'apollo-boost';
import App from './App';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';

const apolloClient: any = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
