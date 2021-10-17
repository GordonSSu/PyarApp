import React from 'react';
import Screen from '../components/Screen';
import { FlatList, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import RecentsItem from '../components/RecentsItem';
import TitleBar from '../components/TitleBar';


const orders = [
    {
        id: 1,
        name: 'Butter Chicken',
        quantity: 4,
        price: 14,
    },
    {
        id: 2,
        name: 'Chicken Curry',
        quantity: 2,
        price: 10,
    },
    {
        id: 3,
        name: 'Chicken Curry',
        quantity: 2,
        price: 10,
    },
    {
        id: 4,
        name: 'Chicken Curry',
        quantity: 2,
        price: 10,
    },
    {
        id: 5,
        name: 'Chicken Curry',
        quantity: 2,
        price: 10,
    },
    {
        id: 6,
        name: 'Chicken Curry',
        quantity: 2,
        price: 10,
    },
    {
        id: 7,
        name: 'Chicken Curry',
        quantity: 2,
        price: 10,
    },
    {
        id: 8,
        name: 'Chicken Curry',
        quantity: 2,
        price: 10,
    },
];


function RecentOrderDetailsScreen({navigation}) {
    return (
        <Screen style = {styles.screen}>
            <View style={styles.itemcontainer}>
                <FlatList
                    data={orders}
                    keyExtractor = {(items) => items.id.toString()}
                    renderItem={({ item }) =>
                        < RecentsItem
                        title= {item.name}
                        subtitle = {'Quantity: ' + item.quantity}
                        price = {"$" + item.quantity*item.price}
                        />}
                />
            </View>
            <Text style = {styles.totalText}>Subtotal: $45</Text>
            <Text style = {styles.totalText}>Tax: $5 </Text>
            <Text style = {styles.totalText}>Tip: $5</Text>
            <Text style = {styles.total}>Total: $55</Text>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
    },
    totalText:{
        marginLeft: 20,
        fontSize: 18
    },
    total:{
        fontWeight: 'bold',
        marginLeft: 20,
        fontSize: 20

    },
    itemcontainer:{
        height: "73%"
    }

})

export default RecentOrderDetailsScreen;