import React from 'react';
import { View } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import { screens } from './screens';

const CustomDrawerContent = ({ navigation }) => {

  const handlePress = (name) => {
    navigation.navigate({ name });
  };

  return (
    <View>
      {screens.map(({ name, key }) => {
        return <DrawerItem
          label={name}
          key={key}
          onPress={() => handlePress(name)}
        />;
      })}
    </View>
  );
};

export { CustomDrawerContent };
