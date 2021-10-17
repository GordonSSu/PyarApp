import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AccountScreen from '../screens/AccountScreen';
import CartScreen from '../screens/CartScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import MenuNavigator from './MenuNavigator';
import colors from '../config/colors';

import Screen from '../components/Screen';
import { Image } from 'react-native';
import AccountNavigator from './AccountNavigator';

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: colors.white,
            inactiveTintColor: colors.lightPrimary,
            style: {
                backgroundColor: colors.primary,
                borderTopWidth: 0,
                height: 90,
                paddingHorizontal: 10,
                paddingVertical: 8,
                justifyContent: 'center'
            }, 
            tabStyle: {
                height: 50
            }
        }}
    >
        <Tab.Screen name="Menu" component={MenuNavigator} options={{
            headerTitle: "Menu", headerTitleAlign: 'left', headerTitleStyle:{fontSize:30},
            tabBarIcon: ({color, size}) =>
            <MaterialCommunityIcons name="food" color={color} size = {size}/>
        }}/>
        <Tab.Screen name="Cart" component={CartScreen} options={{
            headerTitle: "Menu", headerTitleAlign: 'left', headerTitleStyle:{fontSize:30},
             tabBarIcon: ({color, size}) =>
             <MaterialCommunityIcons name="cart" color={color} size = {size}/>
        }}/>
        <Tab.Screen name="Pyar" component={RestaurantDetailsScreen} options={{
            headerTitle: "Menu", headerTitleAlign: 'left', headerTitleStyle:{fontSize:30},
            tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons name="heart-circle-outline" color={color} size={size}/>
        }}/>
        <Tab.Screen name="Account" component={AccountNavigator} options={{
            headerTitle: "Menu", headerTitleAlign: 'left', headerTitleStyle:{fontSize:30},
             tabBarIcon: ({color, size}) =>
             <MaterialCommunityIcons name="account" color={color} size = {size}/>
        }}/>
    </Tab.Navigator>
)

export default AppNavigator;