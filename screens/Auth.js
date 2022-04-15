import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { registerFieldsVar } from '../common/reactiveVariables';

GoogleSignin.configure({
  androidClientId: '1058652577809-2hsg21i9j22d060ke8cpvhk2ge6j1mq2.apps.googleusercontent.com',
  webClientId: '1058652577809-befvkbiblen37vfvvdvf11c4pks8dnuq.apps.googleusercontent.com',
});

const Auth = ({ navigation: { navigate } }) => {
  const handleGoogleSignin = async () => {
    try {
      const hasPlayService = await GoogleSignin.hasPlayServices();
      if (hasPlayService) {
        const userInfo = await GoogleSignin.signIn();
        console.log('userInfo', userInfo);
        registerFieldsVar({
          isDisabled: true,
          accessToken: userInfo.idToken,
          googleId: userInfo.user.id,
          name: userInfo.user.name,
          email: userInfo.user.email,
        });
        navigate('Register');
      }
    } catch (e) {
      console.log('ERROR IS: ', e);
    }
  };

  const handleOnPress = (navigateTo) => {
    registerFieldsVar({});
    navigate(navigateTo);
  };

  return (
    <View>
      <View style={styles.buttonWrapper}>
        <Button title={'Login'} onPress={() => handleOnPress('Login')} />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title={'Register'} onPress={() => handleOnPress('Register')} />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title={'Sign in with Google'} onPress={handleGoogleSignin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    marginVertical: 5,
  }
});

export { Auth };
