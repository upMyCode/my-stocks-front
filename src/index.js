import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { APOLLO_CLIENT_ENTITY } from './App';
import { ApolloProvider } from '@apollo/client';

ReactDOM.render(
  <ApolloProvider client={APOLLO_CLIENT_ENTITY}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);


