import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Header } from './Header';

const Layout = ({ children, header }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header header={header} />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  }
});

export { Layout };
