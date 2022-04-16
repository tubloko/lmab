import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { registerFieldsVar } from '../common/reactiveVariables';
import { Box } from 'native-base';
import { AuthLayout } from '../components/AuthLayout/AuthLayout';

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
    <AuthLayout>
      <Box style={styles.buttonView}>
        <Button title={'Login'} onPress={() => handleOnPress('Login')} />
      </Box>
      <Box mt={5} style={styles.buttonView}>
        <Button title={'Register'} onPress={() => handleOnPress('Register')} />
      </Box>
      <Box mt={5} justifyContent="center">
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={handleGoogleSignin}
        />
      </Box>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    marginVertical: 5,
    width: 300,
  },
});

export { Auth };
