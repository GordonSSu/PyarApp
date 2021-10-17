import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import RestaurantConfirmedOrderScreen from '../screens/RestaurantConfirmedOrderScreen';
import RestaurantReadyOrderScreen from '../screens/RestaurantReadyOrderScreen';
import colors from '../config/colors';

const Tab = createMaterialTopTabNavigator();

const OrderStatusNavigator = () => (
    <Tab.Navigator tabBarOptions={{activeTintColor: colors.primary, inactiveTintColor: 'gray', style: {marginVertical: 30}}}>
        <Tab.Screen name="Confirmed Orders" component={RestaurantConfirmedOrderScreen} options={{
            headerTitle: "Confirmed Orders", headerTitleStyle:{fontSize:30},
        }}/>
        <Tab.Screen name="Ready Orders" component={RestaurantReadyOrderScreen} options={{
            headerTitle: "Ready Orders", headerTitleStyle:{fontSize:30},
        }}/>
    </Tab.Navigator>
)

export default OrderStatusNavigator;