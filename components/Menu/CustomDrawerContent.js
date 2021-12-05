import React from 'react';
import { View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { screens } from './screens';

const CustomDrawerContent = ({ navigation, ...rest }) => {

  const handlePress = (name) => {
    navigation.navigate({ name });
  };

  return (
    <DrawerContentScrollView {...rest}>
      <View>
        {screens.map(({ name, key }) => {
          return <DrawerItem
            label={name}
            key={key}
            onPress={() => handlePress(name)}
          />;
        })}
      </View>
    </DrawerContentScrollView>
  );
};

export { CustomDrawerContent };
