import React from 'react';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

import Card from '../components/Card';
import OrderCard from '../components/OrderCard';
import Screen from '../components/Screen';
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import AppButton from '../components/AppButton';
import DateTimePicker from '@react-native-community/datetimepicker';

const completedOrders = [
    {
        id: 1,
        name: 'Name: JJ',
        description: "Subtotal: $88",
        date: "12/2/2020",
        color: colors.lightGray
    },
    {
        id: 2,
        name: 'Name: JJ',
        description: "Subtotal: $88",
        date: "11/3/2020",
        color: colors.lightGray
    },
    {
        id: 3,
        name: 'Name: JJ',
        description: "Subtotal: $88",
        date: "11/17/2020",
        color: colors.lightGray
    },
    {
        id: 4,
        name: 'Name: JJ',
        description: "Subtotal: $100",
        date: "11/20/2020",
        color: colors.lightGray
    }
];



function RestaurantCompletedOrders() {
    return (
        
        <View style = {styles.viewer}> 
            <Text style={defaultStyles.text9} >Completed Orders</Text>
            <Text>Choose a date to view past orders from: </Text>
            <DateTimePicker value={new Date()} />
            <FlatList
                data={completedOrders}
                keyExtractor = {(items) => items.id.toString()}
                numColumns = {3}
                columnWrapperStyle= {{justifyContent: "aligh-left"}}
                renderItem = {({item}) =>
                    < OrderCard
                    title= {item.name}
                    subtitle = {item.description}
                    color= {item.color}
                    subtitle2 = {item.date}
                    />} 
            />
        </View>
        );
}

const styles = StyleSheet.create({
    viewer: {
        marginVertical: 30
    },
})

export default RestaurantCompletedOrders;