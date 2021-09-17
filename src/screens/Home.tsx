import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../components/Header';

interface HomeProps {
  navigation: any;
}
const Home = ({ navigation }: HomeProps) => {
  return (
    <>
      <View style={styles.container}>
        <Header onPress={() => navigation.goBack()} />
        <Text style={styles.subText}>Hello this is homepage!</Text>
      </View>
    </>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subText: {
    padding: 10,
    fontSize: 18,
  },
});
