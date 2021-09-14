/* eslint-disable @typescript-eslint/no-unused-vars */
import http from '../../helpers/http';
// import { API_URL } from 'react-native-dotenv';
import FlashMessage from '../../components/FlashMessage';
const API_URL = 'http://localhost:8080';

export const Register = (
  data: {
    name: string;
    email: string;
    password: string;
  },
  navigation: any,
) => {
  return async (dispatch: any) => {
    dispatch({ type: 'SET_REGISTER', payload: true });
    const form = new URLSearchParams();
    form.append('name', data.name);
    form.append('email', data.email);
    form.append('password', data.password);
    try {
      await http().post(`${API_URL}/auth/register`, form);
      dispatch({ type: 'SET_REGISTER', payload: false });
      console.log(API_URL);
      navigation.navigate('Welcome');
      FlashMessage('Register Success', 'success');
    } catch (err: any) {
      FlashMessage(err.response.data.message);
      dispatch({ type: 'SET_REGISTER', payload: false });
    }
  };
};

export const Login = (data: { email: string; password: string }) => {
  return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({ type: 'SET_LOGIN', payload: true });
    const form = new URLSearchParams();
    form.append('email', data.email);
    form.append('password', data.password);
    try {
      const { data: newData } = await http().post(
        `${API_URL}/auth/login`,
        form,
      );
      dispatch({ type: 'GET_TOKEN', payload: newData.data.token });
      dispatch({ type: 'SET_LOGIN', payload: false });
      FlashMessage('Login Success', 'success');
    } catch (err: any) {
      FlashMessage(err.response.data.message);
      dispatch({ type: 'SET_LOGIN', payload: false });
    }
  };
};
