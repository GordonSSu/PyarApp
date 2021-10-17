import React from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import RestaurantManagerCode from '../screens/RestaurantManagerCode';
import RestaurantManagerScreen from '../screens/RestaurantManagerScreen';
import StopTakingOrdersScreen from '../screens/StopTakingOrdersScreen';
import StoreHours from '../screens/StoreHours';
import AccountScreen from '../screens/AccountScreen';
import RecentsScreen from '../screens/RecentsScreen';
import AccountScreenPersonalInfo from '../screens/AccountScreenPersonalInfo';
import AccountScreenPayment from '../screens/AccountScreenPayment';
import RecentOrderDetailsScreen from '../screens/RecentOrderDetailsScreen';
import defaultStyles from '../config/styles';

const Stack = createStackNavigator();
const { width, height } = Dimensions.get('screen');

const AccountNavigator = () => (
    <Stack.Navigator> 
        <Stack.Screen name="AccountScreen" component = {AccountScreen} options={{
            headerShown: false
            }}
        />
        
        <Stack.Screen name="Recents" component={RecentsScreen} options={{
            headerBackTitle: 'Back',
            headerLeftContainerStyle: styles.headerLeftContainerStyle,
            headerStyle: styles.headerStyle,
            headerTintColor: defaultStyles.colors.primary,
            headerTitle: 'recent orders',
            headerTitleStyle: [defaultStyles.text4, styles.title]
            }}
        />
        
        <Stack.Screen name="Recent Details" component = {RecentOrderDetailsScreen} options={{
            headerBackTitle: 'Recents',
            headerLeftContainerStyle: styles.headerLeftContainerStyle,
            headerStyle: styles.headerStyle,
            headerTintColor: defaultStyles.colors.primary,
            headerTitleStyle: [defaultStyles.text4, styles.title]
            }}
        />
        
        <Stack.Screen name="Personal Information" component = {AccountScreenPersonalInfo} options={{
            headerBackTitle: 'Back',
            headerLeftContainerStyle: styles.headerLeftContainerStyle,
            headerStyle: styles.headerStyle,
            headerTintColor: defaultStyles.colors.primary,
            headerTitleStyle: [defaultStyles.text4, styles.title]
            }}
        />
        
        <Stack.Screen name="Payment Information" component = {AccountScreenPayment} options={{
            headerBackTitle: 'Back',
            headerLeftContainerStyle: styles.headerLeftContainerStyle,
            headerStyle: styles.headerStyle,
            headerTintColor: defaultStyles.colors.primary,
            headerTitleStyle: [defaultStyles.text4, styles.title]
            }}
        />
    </Stack.Navigator>
)

const styles = StyleSheet.create({
    backButtonContainer: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    backText: {
        textTransform: 'capitalize'
    },
    closeButton: {
        backgroundColor: defaultStyles.colors.primary,
        borderRadius: 20, // arbitrary radius to ensure View is round
    },
    closeIcon: {
        color: defaultStyles.colors.primary
    },
    headerLeftContainerStyle: {
        paddingLeft: width * 0.02
    },
    headerStyle: {
        backgroundColor: defaultStyles.colors.white,
        borderBottomColor: defaultStyles.colors.lightGray,
        borderBottomWidth: 1,
        height: height * 0.1,
        shadowColor: 'transparent'
    },
    title: {
        color: defaultStyles.colors.black,
        textTransform: 'capitalize'
    }
})

export default AccountNavigator;