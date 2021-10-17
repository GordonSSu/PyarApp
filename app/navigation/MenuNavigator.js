import React from 'react';
import { View, StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import MenuScreen from '../screens/MenuScreen';
import ItemDetailsScreen from '../screens/ItemDetailsScreen';
import defaultStyles from '../config/styles';

const Stack = createStackNavigator();

const MenuNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Menu" component = {MenuScreen} options= {{
            headerBackTitleVisible: false,
            headerLeftContainerStyle:{
            marginLeft: 10
            },
            headerTransparent: true,
            headerTitle: false
            }}
        />

        <Stack.Screen name="ItemDetails" component = {ItemDetailsScreen} options= {{
            headerBackTitleVisible: false,
            headerBackImage: ({size, color}) => (
                <View style={styles.closeButton}><MaterialCommunityIcons name="chevron-left" size={32} style={styles.closeIcon}/></View>
            ),
            headerLeftContainerStyle:{
            marginLeft: '6%'
            },
            headerTransparent: true,
            headerTitle: false
            }}
        />

    </Stack.Navigator>
)

const styles = StyleSheet.create({
    closeButton: {
        backgroundColor: defaultStyles.colors.primary,
        borderRadius: 20, // arbitrary radius to ensure View is round
    },
    closeIcon: {
        color: 'white'
    }
})

export default MenuNavigator;
