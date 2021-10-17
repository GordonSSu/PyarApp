import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import OrderStatusNavigator from './app/navigation/OrderStatusNavigator';
import RestaurantReadyOrderScreen from './app/screens/RestaurantReadyOrderScreen';
import AppNavigator from './app/navigation/AppNavigator';
import RestaurantConfirmedOrderScreen from './app/screens/RestaurantConfirmedOrderScreen';
import RestaurantCompletedOrders from './app/screens/RestaurantCompletedOrders';
import RestaurantAppNavigator from './app/navigation/RestaurantAppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import RestaurantManagerCode from './app/screens/RestaurantManagerCode';
import RestaurantManagerScreen from './app/screens/RestaurantManagerScreen';
import StopTakingOrdersScreen from './app/screens/StopTakingOrdersScreen';
import testing from './app/screens/TestScreen';
import testscreen from './app/screens/TestScreen';
import TestScreen from './app/screens/TestScreen';

export default function App() {
  return (
    <TestScreen/>
  );
}
