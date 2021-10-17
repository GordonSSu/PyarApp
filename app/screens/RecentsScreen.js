import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Card from '../components/Card';
import RecentsCard from '../components/RecentsCard';
import Screen from '../components/Screen';
import TitleBar from '../components/TitleBar';

const orders = [
    {
        id: 1,
        date: '12/18/20',
        price: 63.44,
        items: 5
    },
    {
        id: 2,
        date: '12/10/20',
        price: 33.44,
        items: 3
    },
    {
        id: 3,
        date: '11/22/20',
        price: 108.32,
        items: 8
    },
];

function RecentsScreen({navigation}) {
    return (
        <Screen style = {styles.screen}>
            <FlatList
                data={orders}
                keyExtractor = {(items) => items.id.toString()}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress = {() => navigation.navigate("Recent Details")}>
                        < RecentsCard
                        title= {item.date}
                        subtitle = {'# of items: ' + item.items}
                        price = {"Total: $" + item.price}
                        />
                    </TouchableOpacity>}
                scrollEnabled='false'
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
    },
    title:{
        marginVertical: 20
    }
})

export default RecentsScreen;