import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { navigationRef } from './hooks/navigation';
import { Home, CreateChallenge } from './screens';
import { AuthProvider } from './common';
import { client } from './ApolloClient';
import { ApolloProvider } from '@apollo/client';

const Drawer = createDrawerNavigator();

const App: () => React$Node = () => {

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <NavigationContainer ref={navigationRef}>
          <Drawer.Navigator initialRouteName={'Home'}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Create a new challenge" component={CreateChallenge} />
            <Drawer.Screen name="People" component={Home} />
            <Drawer.Screen name="Settings" component={Home} />
          </Drawer.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
