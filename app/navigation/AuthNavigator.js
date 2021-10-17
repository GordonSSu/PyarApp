import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import OtpScreen from '../screens/OtpScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
      <Stack.Navigator> 
        <Stack.Screen name = "WelcomeScreen" component = {WelcomeScreen} options={{ headerShown: false}}/>
        <Stack.Screen name = "Login" component = {LoginScreen} options={{ headerTransparent: true, headerBackTitleVisible: false, headerTitle: false}} />
        <Stack.Screen name = "OTP" component = {OtpScreen} options={{ headerTransparent: true, headerBackTitleVisible: false, headerTitle: false}}/>
        <Stack.Screen name = "Register" component = {RegisterScreen} options={{ headerTransparent: true, headerBackTitleVisible: false, headerTitle: false}}/>
      </Stack.Navigator>
    );
};

export default AuthNavigator;