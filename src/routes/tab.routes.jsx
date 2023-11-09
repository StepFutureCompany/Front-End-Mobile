/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import ListFunc from '../screens/List';
import Logout from '../screens/Logout';
import DataFunc from '../screens/Staff';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Funcionario">
      <Tab.Screen
        name="Sair"
        component={Logout}
        options={{
          tabBarIcon: () => <Icon name="log-out" size={20} color={'#1ca6f1'} />,
          tabBarLabel: 'Sair',
        }}
      />
      <Tab.Screen
        name="Funcionario"
        component={DataFunc}
        options={{
          tabBarIcon: () => <Icon name="user" size={20} color={'#1ca6f1'} />,
          tabBarLabel: 'Dados do Funcionário',
        }}
      />
      <Tab.Screen
        name="ListFunc"
        component={ListFunc}
        options={{
          tabBarIcon: () => <Icon name="check-square" size={20} color={'#1ca6f1'} />,
          tabBarLabel: 'Folha de Ponto',
        }}
      />
    </Tab.Navigator>
  );
}
