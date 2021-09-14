import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { studetRegistration } from '../assets';
import { ButtonCustom } from '../components/ButtonCustom';
import Header from '../components/Header';
import Input from '../components/Input';
import { Login as ActionLogin } from '../redux/action/auth';

interface LoginProps {
  email: string;
  password: string;
  navigation: any;
}
const Login = ({ navigation }: LoginProps) => {
  const { email, setEmail } = useState('');
  const { password, setPassword } = useState('');
  const dispatch = useDispatch();
  const form = {
    email,
    password,
  };

  const onSubmit = () => {
    dispatch(ActionLogin(form));
  };
  return (
    <>
      <View>
        <Header onPress={() => navigation.goBack()} />
        <ScrollView>
          <Text style={styles.textHeader}>Login</Text>
          <View style={styles.wrapImage}>
            <Image source={studetRegistration} />
          </View>
          <View style={{ alignSelf: 'center', marginTop: 15 }}>
            <View>
              <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                placeholder="please enter your Email"
              />
              <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholder="please enter your passwrord"
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={{ color: '#04B05D' }}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={{ marginTop: 20 }}>
              <ButtonCustom text="Login" onPress={onSubmit} />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  textHeader: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '800',
  },
});
