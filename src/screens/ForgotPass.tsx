import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { studetRegistration } from '../assets';
import { ButtonCustom } from '../components/ButtonCustom';
import Header from '../components/Header';
import Input from '../components/Input';
import { generateForgotCode as ForgotAction } from '../redux/action/auth';

interface ForgotProps {
  email: string;
  navigation: any;
}
const ForgotPass = ({ navigation }: ForgotProps) => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(ForgotAction(email, navigation));
  };
  return (
    <>
      <View>
        <Header onPress={() => navigation.goBack()} />
        <ScrollView>
          <Text style={styles.textHeader}>Forgot Password ?</Text>
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
            </View>
            <View style={{ marginTop: 20 }}>
              <ButtonCustom text="Send Email" onPress={onSubmit} />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default ForgotPass;
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
