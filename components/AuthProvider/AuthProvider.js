import React, { useEffect } from 'react';
import { Auth, Login, Register } from '../../screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getToken } from '../../common/utils';
import { useReactiveVar } from '@apollo/client';
import { authToken } from '../../common/reactiveVariables';

const Stack = createNativeStackNavigator();

export const authScreens = [
  { name: 'Auth', component: Auth, key: 'auth' },
  { name: 'Login', component: Login, key: 'login' },
  { name: 'Register', component: Register, key: 'register' },
];

const AuthProvider = ({ children }) => {
  const token = useReactiveVar(authToken);

  useEffect(() => {
    (async function () {
      authToken(await getToken());
    })();
  }, []);

  return (
    <>
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
