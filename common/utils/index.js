import AsyncStorage from '@react-native-async-storage/async-storage';
import { authToken } from '../reactiveVariables';

const AUTH_TOKEN = 'token';

let token;

export const getToken = async () => {
  if (token) {
    return Promise.resolve(token);
  }

  token = await AsyncStorage.getItem(AUTH_TOKEN);
  return token;
};

export const signIn = (newToken) => {
  token = newToken;
  authToken(newToken);
  return AsyncStorage.setItem(AUTH_TOKEN, newToken);
};

export const signOut = () => {
  token = undefined;
  authToken('');
  return AsyncStorage.removeItem(AUTH_TOKEN);
};
