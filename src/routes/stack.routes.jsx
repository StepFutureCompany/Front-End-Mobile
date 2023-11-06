/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/Login';
import Start from '../screens/Start';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
