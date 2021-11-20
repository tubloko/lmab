import React from 'react';
import { navigationRef } from '../../hooks/navigation';
import { drawerOptions, headerOptions } from './drawerOptions';
import { screens } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CustomDrawerContent } from './CustomDrawerContent';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        {...drawerOptions}
      >
        <Drawer.Screen
          name="LMAB"
          options={{ drawerLabel: () => null, title: '', drawerIcon: () => null, itemStyle: { height: 0 } }}
        >
          {(props) => (
            <Stack.Navigator {...props} screenOptions={headerOptions}>
              {screens.map(({ name, component, key }) => <Stack.Screen key={key} name={name} component={component} />)}
            </Stack.Navigator>
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export { Navigation };
