import React from 'react';
import { View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { screens } from './screens';
import { signOut } from '../../common/utils';

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
      <DrawerItem
        label={'Logout'}
        onPress={signOut}
      />
    </DrawerContentScrollView>
  );
};

export { CustomDrawerContent };
