import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux'

import AppButton from '../components/AppButton';
import Card from '../components/Card';
import CartItem from '../components/CartItem';
import Screen from '../components/Screen';
import TitleBar from '../components/TitleBar';
import defaultStyles from '../config/styles';


function CartScreen(props) {
    console.log(this.props.cartItems)

    return (
        <>
        <TitleBar title={'Cart'}/>
        <Screen style={styles.screen}>
        <ScrollView>
            {/* <FlatList
                data={items}
                keyExtractor = {(items) => items.id.toString()}
                renderItem={({ item }) =>
                    < CartItem
                        title= {item.name}
                        subtitle = {'$' + item.price}
                        //quantitiy = {"quantity: " + item.quantity}
                    />}
                scrollEnabled='false'
            /> */}
            <Text>Testing</Text>
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

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (product) => dispatch({ type: 'REMOVE_FROM_CART', payload: product })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);