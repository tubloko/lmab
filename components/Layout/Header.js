import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  homeHeaderContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  homeHeaderContent: {
    fontSize: 20,
  }
});

const BurgerMenu = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.openDrawer();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <FontAwesomeIcon icon={faBars} size={20} />
    </TouchableOpacity>
  );
};

const HomeHeader = () => {

  return (
    <View style={styles.homeHeaderContainer}>
      <Text style={styles.homeHeaderContent}>
        Home header
      </Text>
      <BurgerMenu />
    </View>
  );
};

const CreateChallengeHeader = () => {
  return (
    <View>
      <Text>
        Create challenge header
      </Text>
      <BurgerMenu />
    </View>
  );
};

const headers = {
  Home: () => HomeHeader(),
  CreateChallenge: () => CreateChallengeHeader(),
};

const Header = ({ header }) => headers[header]();

export { Header };
