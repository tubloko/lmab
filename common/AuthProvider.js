import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Auth, Login, Register } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const authScreens = [
  { name: 'Auth', component: Auth, key: 'auth' },
  { name: 'Login', component: Login, key: 'login' },
  { name: 'Register', component: Register, key: 'register' },
];

const AuthProvider = ({ children }) => {
  //todo change to makeVar from graphql
  const [token, setToken] = useState();

  useEffect(() => {
    (async function () {
      setToken(await AsyncStorage.getItem('token'));
    })();
  }, []);

  return (
    <>
      {/* eslint-disable-next-line no-constant-condition */}
      {token ? children : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName={'Auth'}>
            {authScreens.map(({ name, component, key }) => (
              <Stack.Screen key={key} name={name} component={component} options={{ headerShown: false }} />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export { AuthProvider };
