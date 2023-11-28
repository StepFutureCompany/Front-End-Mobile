/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';

import HoleriteScreen from '../screens/holerite';
import LoginScreen from '../screens/Login';
import Start from '../screens/Start';
import TabRoutes from './tab.routes';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Login', { isFirstTime: true });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Start" component={Start} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={TabRoutes} options={{ headerShown: false }} />
      <Stack.Screen name="Holerite" component={HoleriteScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
export default AppNavigator;
