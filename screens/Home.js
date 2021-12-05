import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Layout } from '../components';
import FastImage from 'react-native-fast-image';

const mockedUsers = [
  { nickname: 'mocked user1', id: '10' },
  { nickname: 'mocked user2', id: '12' },
  { nickname: 'mocked user3', id: '13' },
];

const Home = () => {
  return (
    <Layout header={'Home'}>
      <View>
        <Text style={styles.header}>Recent</Text>
      </View>
      <ScrollView horizontal>
        {mockedUsers.map(({ nickname, id }) => {
          return (
            <View key={id} style={styles.recentItem}>
              <FastImage
                source={require('../assets/person_placeholder.png')}
                style={styles.image}
                resizeMode={FastImage.resizeMode.cover}
              />
              <Text>{nickname}</Text>
            </View>
          );
        })}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    padding: 10,
    paddingHorizontal: 20,
  },
  image: {
    borderRadius: 20,
    height: 80,
    width: 130,
  },
  recentItem: {
    marginHorizontal: 10,
  }
});

export { Home };
