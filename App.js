import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { Provider } from 'react-redux'
import store from './store'

import OrderStatusNavigator from './app/navigation/OrderStatusNavigator';
import RestaurantReadyOrderScreen from './app/screens/RestaurantReadyOrderScreen';
import AppNavigator from './app/navigation/AppNavigator';
import RestaurantConfirmedOrderScreen from './app/screens/RestaurantConfirmedOrderScreen';
import RestaurantCompletedOrders from './app/screens/RestaurantCompletedOrders';
import RestaurantAppNavigator from './app/navigation/RestaurantAppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import RecentsScreen from './app/screens/RecentsScreen';
import AccountNavigator from './app/navigation/AccountNavigator';
import DataBaseScreen from './app/screens/DataBaseScreen';

export default function App() {
    return (
    <Provider store={store}>
    <NavigationContainer>
        <AppNavigator />
    </NavigationContainer>
    </Provider>
  );
}
