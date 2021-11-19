import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Login } from '../screens';

const AuthProvider = ({ children }) => {
  //todo change to makeVar from graphql
  const [token, setToken] = useState();

  useEffect(() => {
    (async function () {
      setToken(await AsyncStorage.getItem('token'));
    })();
  }, []);

  return (
    <>
      {/* eslint-disable-next-line no-constant-condition */}
      {'true' ? children : <Login />}
    </>
  );
};

export { AuthProvider };
