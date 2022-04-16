import 'react-native-gesture-handler';
import React from 'react';
import client from './ApolloClient';
import { ApolloProvider } from '@apollo/client';
import { Navigation, AuthProvider } from './components';
import { NativeBaseProvider , Box } from 'native-base';

const App: () => React$Node = () => {

  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider>
        <Box flex={1} bg={'muted.900'}>
          <AuthProvider>
            <Navigation />
          </AuthProvider>
        </Box>
      </NativeBaseProvider>
    </ApolloProvider>
  );
};

export default App;
