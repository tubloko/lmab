// import 'com.facebook.FacebookSdk';
import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View
} from 'react-native';
import { LoginButton, AccessToken, Profile } from 'react-native-fbsdk-next';

const App: () => React$Node = () => {
  const [login, setLogin] = useState(null);
  console.log('login', login);
  const currentProfile = Profile.getCurrentProfile().then(
    function(currentProfile) {
      if (currentProfile) {
        console.log('The current logged user is: ' +
          currentProfile.name
          + '. His profile id is: ' +
          currentProfile.userID
        );
      }
    }
  );

  return (
    <SafeAreaView style={{ paddingVertical: 10, marginHorizontal: 10, }}>
      <Text>Welcome to lmab!</Text>
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
                    setLogin(data.accessToken.toString());
                  }
                );
              }
            }
          }
          onLogoutFinished={() => console.log('logout.')}/>
      </View>
    </SafeAreaView>
  );
};

export default App;
