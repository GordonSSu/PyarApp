import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AccountScreen from '../screens/AccountScreen';
import CartScreen from '../screens/CartScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import MenuNavigator from './MenuNavigator';
import colors from '../config/colors';

import Screen from '../components/Screen';
import OrderStatusNavigator from './OrderStatusNavigator';
import RestaurantCompletedOrders from '../screens/RestaurantCompletedOrders';
import ManagerScreenNavigator from './ManagerScreenNavigator';

const Tab = createBottomTabNavigator();
const RestaurantAppNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: colors.white,
            inactiveTintColor: colors.lightPrimary,
            style: {
                backgroundColor: colors.primary,
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
        <Tab.Screen name="CurrentOrders" component={OrderStatusNavigator} options={{
            headerTitle: "Menu", headerTitleAlign: 'left', headerTitleStyle:{fontSize:30},
            tabBarIcon: ({color, size}) =>
            <MaterialCommunityIcons name="food" color={color} size = {size}/>
        }}/>
        <Tab.Screen name="Completed Orders" component={RestaurantCompletedOrders} options={{
            headerTitle: "Menu", headerTitleAlign: 'left', headerTitleStyle:{fontSize:30},
             tabBarIcon: ({color, size}) =>
             <MaterialCommunityIcons name="cart" color={color} size = {size}/>
        }}/>
        <Tab.Screen name="Manager" component={ManagerScreenNavigator} options={{
            headerTitle: "Manager", headerTitleAlign: 'left', headerTitleStyle:{fontSize:30},
             tabBarIcon: ({color, size}) =>
             <MaterialCommunityIcons name="account" color={color} size = {size}/>
        }}/>
    </Tab.Navigator>
)

export default RestaurantAppNavigator;