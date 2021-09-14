import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { studetRegistration } from '../assets';
import { ButtonCustom } from '../components/ButtonCustom';
import Header from '../components/Header';
import Input from '../components/Input';
import { Register as Action } from '../redux/action/auth';

interface RegisterProps {
  navigation: any;
}

const Register = ({ navigation }: RegisterProps) => {
  const { name, setName } = React.useState('');
  const { email, setEmail } = React.useState('');
  const { password, setPassword } = React.useState('');
  const form = {
    name,
    email,
    password,
  };
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(Action(form, navigation));
  };
  return (
    <>
      <View>
        <Header onPress={() => navigation.goBack()} />
        <ScrollView>
          <Text style={styles.textHeader}>Registration</Text>
          <View style={styles.wrapImage}>
            <Image source={studetRegistration} />
          </View>
          <View style={{ alignSelf: 'center', marginTop: 15 }}>
            <View>
              <Input
                label="Name"
                value={name}
                onChangeText={setName}
                placeholder="please enter your name"
              />
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
            <View style={{ marginTop: 10 }}>
              <ButtonCustom text="Register" onPress={onSubmit} />
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Register;
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
