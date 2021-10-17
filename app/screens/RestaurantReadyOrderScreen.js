import React from 'react';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

import Card from '../components/Card';
import OrderCard from '../components/OrderCard';
import Screen from '../components/Screen';
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import AppButton from '../components/AppButton';

const readyOrder = [
    {
        id: 1,
        name: 'Name: JJ',
        description: "Subtotal: $88",
        time: "20min",
        color: colors.readyOrder
    },
    {
        id: 2,
        name: 'Name: JJ',
        description: "Subtotal: $88",
        time: "23min",
        color: colors.readyOrder
    },
    {
        id: 3,
        name: 'Name: JJ',
        description: "Subtotal: $88",
        time: "24min",
        color: colors.readyOrder
    },
    {
        id: 4,
        name: 'Name: JJ',
        description: "Subtotal: $100",
        time: "40min",
        color: colors.readyOrder
    }
];

function RestaurantReadyOrderScreen() {
    return (
        <View style = {styles.viewer}> 
            <Text style={defaultStyles.text9} >Ready Orders</Text>
            <FlatList
                data={readyOrder}
                keyExtractor = {(items) => items.id.toString()}
                numColumns = {3}
                columnWrapperStyle= {{justifyContent: "aligh-left"}}
                renderItem = {({item}) =>
                    < OrderCard
                    title= {item.name}
                    subtitle = {item.description}
                    color= {item.color}
                    subtitle2 = {item.time}
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

export default RestaurantReadyOrderScreen;