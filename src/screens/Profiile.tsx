import React from 'react';

import { Text, View, StyleSheet } from 'react-native';
import Header from '../components/Header';

interface ProfileProps {
  navigation: any;
}
const Profiile = ({ navigation }: ProfileProps) => {
  return (
    <>
      <View style={styles.container}>
        <Header onPress={() => navigation.goBack()} />
        <Text style={styles.subText}>Hello this is profile!</Text>
      </View>
    </>
  );
};

export default Profiile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subText: {
    padding: 10,
    fontSize: 18,
  },
});
