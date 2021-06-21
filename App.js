import 'react-native-gesture-handler';
import React from 'react';
import { View, Button } from 'react-native';
import { AuthScreen, HomeScreen } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { navigationRef, navigate } from './hooks/navigation';

const Stack = createStackNavigator();

const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache: new InMemoryCache()
});

const App: () => React$Node = () => {

  return (
    <ApolloProvider client={client}>
      <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', justifyContent: 'space-around' }}>
        <Button
          title={'Home'}
          onPress={() => navigate('HomeScreen')}
        />
        <Button
          title={'Sign in'}
          onPress={() => navigate('AuthScreen')}
        />
      </View>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
          <Stack.Screen name='AuthScreen' component={AuthScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
