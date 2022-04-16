import 'react-native-gesture-handler';
import React from 'react';
import { AuthProvider } from './common';
import client from './ApolloClient';
import { ApolloProvider } from '@apollo/client';
import { Navigation } from './components';

const App: () => React$Node = () => {

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
