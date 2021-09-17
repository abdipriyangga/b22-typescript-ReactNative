import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './screens/Register';
import Welcome from './screens/Welcome';

import { useSelector } from 'react-redux';
import Login from './screens/Login';
import ForgotPass from './screens/ForgotPass';
import Home from './screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ButtonTab from './components/ButtonTab';
import Profiile from './screens/Profiile';
import ResetPassword from './screens/ResetPassword';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <ButtonTab {...props} />}>
      <Tab.Screen
        name="home-outline"
        component={Home}
        options={{ headerShown: false, tabBarBadge: 3 }}
      />
      <Tab.Screen
        name="person-outline"
        component={Profiile}
        options={{ headerShown: false, tabBarBadge: 3 }}
      />
    </Tab.Navigator>
  );
};
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
            <Stack.Screen
              name="Profile"
              component={Profiile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <Stack.Screen
            name="Home"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
