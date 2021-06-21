import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import { AuthScreen } from './screens/AuthScreen';

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingVertical: 10, marginHorizontal: 10, }}>
      <Text>Welcome to lmab!</Text>
      <AuthScreen />
    </SafeAreaView>
  );
};

export default App;
