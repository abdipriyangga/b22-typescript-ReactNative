import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { studetRegistration } from '../assets';
import { ButtonCustom } from '../components/ButtonCustom';
import Header from '../components/Header';
import Input from '../components/Input';
import { ResetPassword as ResetAction } from '../redux/action/auth';

interface ResetProps {
  navigation: any;
}

const ResetPassword = ({ navigation }: ResetProps) => {
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const form = {
    code,
    email,
    password,
    confirmPassword,
  };
  const onSubmit = () => {
    dispatch(ResetAction(form, navigation));
  };
  return (
    <>
      <View>
        <Header onPress={() => navigation.goBack()} />
        <ScrollView>
          <Text style={styles.textHeader}>Reset Your Password</Text>
          <View style={styles.wrapImage}>
            <Image source={studetRegistration} />
          </View>
          <View style={{ alignSelf: 'center', marginTop: 10 }}>
            <View>
              <Input
                label="Code"
                value={code}
                onChangeText={setCode}
                placeholder="please enter your name"
              />
              <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                placeholder="please enter your email"
              />
              <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholder="please enter your passwrord"
              />
              <Input
                label="ConfirmPassword"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                placeholder="confirm your passwrord"
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <ButtonCustom text="Reset Password" onPress={onSubmit} />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default ResetPassword;
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
