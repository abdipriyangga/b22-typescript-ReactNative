import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ButtonCustom } from '../components/ButtonCustom';
import { circleBottom, circleTop, student } from '../assets';

interface WelcomeProps {
  navigation: any;
}
const Welcome = ({ navigation }: WelcomeProps) => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Image source={circleTop} style={{ width: 100, height: 130 }} />
        </View>
        <View
          style={{
            marginHorizontal: 70,
            marginBottom: 5,
          }}>
          <Image source={student} style={{ width: 250, height: 180 }} />
        </View>
        <View style={styles.wrapContent}>
          <View style={{ marginBottom: 30, flexDirection: 'row' }}>
            <Text style={styles.textHeader}>Welcome to </Text>
            <Text style={{ fontSize: 24, color: '#04B05D', fontWeight: '700' }}>
              Bellajar
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <ButtonCustom
              text="Create your account"
              onPress={() => navigation.navigate('Register')}
            />
            <ButtonCustom
              text="Login"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 30,
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <Image source={circleBottom} style={{ width: 140, height: 130 }} />
        </View>
      </View>
    </>
  );
};

export default Welcome;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 24,
    fontWeight: '700',
  },
});
