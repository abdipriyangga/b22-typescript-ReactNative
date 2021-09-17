/* eslint-disable @typescript-eslint/no-unused-vars */
import http from '../../helpers/http';
// import { API_URL } from 'react-native-dotenv';
import Message from '../../components/FlashMessage';
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
      const { data: newData } = await http().post(
        `${API_URL}/auth/register`,
        form,
      );
      dispatch({ type: 'SET_REGISTER', payload: false });
      console.log('Ini data  form: ', newData);
      navigation.navigate('Login');
      FlashMessage('Register Success!', 'success');
    } catch (err: any) {
      FlashMessage(err.response.data.message);
      dispatch({ type: 'SET_REGISTER', payload: false });
    }
  };
};

export const Login = (data: { email: string; password: string }) => {
  return async (dispatch: (args: { type: string; payload: any }) => void) => {
    dispatch({ type: 'SET_LOGIN', payload: true });
    const form = new URLSearchParams();
    form.append('email', data.email);
    form.append('password', data.password);
    try {
      const { data: newData } = await http().post(
        `${API_URL}/auth/login`,
        form,
      );
      console.log('====================================');
      console.log(API_URL);
      console.log('====================================');
      dispatch({ type: 'GET_TOKEN', payload: newData.results.token });
      dispatch({ type: 'SET_LOGIN', payload: false });
      console.log(newData);
      Message('Login Success', 'success');
    } catch (err: any) {
      Message(err.response.data.message);
      dispatch({ type: 'SET_LOGIN', payload: false });
    }
  };
};

export const generateForgotCode = (email: string, navigation: any) => {
  return async (dispatch: any) => {
    dispatch({ type: 'SET_GENERATE_FORGOT_CODE', payload: true });
    const form = new URLSearchParams();
    form.append('email', email);
    try {
      const { data: NewData } = await http().post(
        `${API_URL}/auth/forgot-password`,
        form,
      );
      dispatch({ type: 'SET_GENERATE_FORGOT_CODE', payload: false });
      navigation.navigate('ResetPassword');
    } catch (err: any) {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };
};

export const ResetPassword = (
  data: {
    code: string;
    email: string;
    password: string;
    confirmPassword: string;
  },
  navigation: any,
) => {
  return async (dispatch: any) => {
    dispatch({ type: 'SET_RESET_PASSWORD', payload: true });
    const form = new URLSearchParams();
    form.append('email', data.email);
    form.append('code', data.code);
    form.append('password', data.password);
    form.append('password', data.confirmPassword);
    try {
      const { data: newData } = await http().post(
        `${API_URL}/auth/reset-password`,
        form,
      );
      dispatch({ type: 'SET_RESET_PASSWORD', payload: false });
      navigation.replace('Login');
    } catch (err: any) {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };
};
