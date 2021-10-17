import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';

import AppButton from '../components/AppButton';
import Card from '../components/Card';
import CartItem from '../components/CartItem';
import Screen from '../components/Screen';
import TitleBar from '../components/TitleBar';
import defaultStyles from '../config/styles';

const items = [
    {
        id: 1,
        name: 'Pan Fried Salmon',
        price: 25.99,
        quantitiy: 5
    },
    {
        id: 2,
        name: 'Pyar Wings',
        price: 12.99,
        quantitiy: 2
    },
    {
        id: 3,
        name: 'Kuska and Sharma',
        price: 15.99,
        quantitiy: 2
    },
    {
        id: 4,
        name: 'Fire Roasted Shrimp Skewers',
        price: 15.99,
        quantitiy: 2
    },
    {
        id: 5,
        name: 'Garlic Burrata Platter',
        price: 15.99,
        quantitiy: 2
    },
];

function CartScreen(props) {
    return (
        <>
        <TitleBar title={'Cart'}/>
        <Screen style={styles.screen}>
        <ScrollView>
            <FlatList
                data={items}
                keyExtractor = {(items) => items.id.toString()}
                renderItem={({ item }) =>
                    < CartItem
                        title= {item.name}
                        subtitle = {'$' + item.price}
                        //quantitiy = {"quantity: " + item.quantity}
                    />}
                scrollEnabled='false'
            />
            
            <Card style={styles.totalCard}>
                <View style={styles.priceRow}>
                    <Text style={[defaultStyles.text6, styles.checkoutLabel]}>subtotal:</Text>
                    <Text style={[defaultStyles.text6, styles.checkoutLabel]}>$86.95</Text>
                </View>
                <View style={styles.priceRow}>
                    <Text style={[defaultStyles.text6, styles.checkoutLabel]}>tax:</Text>
                    <Text style={[defaultStyles.text6, styles.checkoutLabel]}>$8.22</Text>
                </View>
                <View style={styles.priceRow}>
                    <Text style={[defaultStyles.text5, styles.totalLabel]}>total:</Text>
                    <Text style={[defaultStyles.text5, styles.totalLabel]}>$95.17</Text>
                </View>

                <AppButton buttonStyle={styles.placeOrderButton}>
                    <Text style={[defaultStyles.text5, styles.placeOrderText]}>place order</Text>
                </AppButton>
            </Card>
        </ScrollView>
        </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        padding: 15,
        color: defaultStyles.colors.black
    },
    placeOrderButton: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 14,
        width: '100%'
    },
    placeOrderText: {
        color: defaultStyles.colors.white,
        fontWeight: '600',
        textTransform: 'capitalize'
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4
    },
    screen: {
        flex: 1
    },
    totalCard: {
        marginTop: 8,
    },
    checkoutLabel: {
        color: defaultStyles.colors.darkGray,
        textTransform: 'capitalize'
    },
    totalLabel: {
        color: defaultStyles.colors.black,
        fontWeight: '500',
        textTransform: 'capitalize'
    }
})

export default CartScreen;