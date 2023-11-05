/* eslint-disable prettier/prettier */

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "../screens/Login";
import DataFunc from "../screens/Staff";
import Start from "../screens/Start";
import ListFunc from '../screens/List'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inicial" component={Start}/>
            <Tab.Screen name="Funcionario" component={DataFunc}/>
            <Tab.Screen name="Login" component={LoginScreen}/>
            <Tab.Screen name="ListFunc" component={ListFunc}/>
        </Tab.Navigator>
    )
}
