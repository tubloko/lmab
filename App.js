import 'react-native-gesture-handler';
import React from 'react';
import client from './ApolloClient';
import { ApolloProvider } from '@apollo/client';
import { Navigation, AuthProvider } from './components';
import { NativeBaseProvider } from 'native-base';

const App: () => React$Node = () => {

  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </NativeBaseProvider>
    </ApolloProvider>
  );
};

export default App;
