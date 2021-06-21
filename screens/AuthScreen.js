import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import { AccessToken, LoginButton } from 'react-native-fbsdk-next';

const AuthScreen = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '1058652577809-2hsg21i9j22d060ke8cpvhk2ge6j1mq2.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
      androidClientId: '1058652577809-rnam4s0vsolpg4k061sp7bj79i1h5p0a.apps.googleusercontent.com',
    });
    isSignedIn();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
    } catch (error) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated');
      } else {
        console.log('Some Other Error Happened');
      }
    }
  };

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      return user?.idToken;
    } else {
      console.log('Please Login');
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser({}); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <View>
        <LoginButton
          onLoginFinished={
            async (error, result) => {
              if (error) {
                console.log('login has error: ' + result.error);
              } else if (result.isCancelled) {
                console.log('login is cancelled.');
              } else {
                console.log('result', result);
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data);
                  }
                );
              }
            }
          }
          onLogoutFinished={() => console.log('logout.')}/>
      </View>
      <View>
        {!user.idToken ?
          <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
          /> :
          <TouchableOpacity onPress={signOut}>
            <Text>Logout</Text>
          </TouchableOpacity>
        }
      </View>
    </>
  );
};

export { AuthScreen };
