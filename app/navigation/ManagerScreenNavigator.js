import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import RestaurantManagerCode from '../screens/RestaurantManagerCode';
import RestaurantManagerScreen from '../screens/RestaurantManagerScreen';
import StopTakingOrdersScreen from '../screens/StopTakingOrdersScreen';
import StoreHours from '../screens/StoreHours';

const Stack = createStackNavigator();

const ManagerScreenNavigator = () => (
    <Stack.Navigator> 
      <Stack.Screen name = "Code" component = {RestaurantManagerCode} options={{ headerShown: false}}/>
      <Stack.Screen name = "Manager Screen" component = {RestaurantManagerScreen} options={{ headerTransparent: true, headerBackTitleVisible: false, headerTitle: false}} />
      <Stack.Screen name = "Stop Orders" component = {StopTakingOrdersScreen} options={{}}/>
      <Stack.Screen name = "Edit Hours" component = {StoreHours} options={{}}/>
    </Stack.Navigator>
)

export default ManagerScreenNavigator;