import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './screens/Register';
import Welcome from './screens/Welcome';

import { useSelector } from 'react-redux';
import Login from './screens/Login';
import ForgotPass from './screens/ForgotPass';
const Stack = createStackNavigator();

const Router = () => {
  const { token } = useSelector<any, any>(state => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {token === null ? (
          <>
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPass}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
