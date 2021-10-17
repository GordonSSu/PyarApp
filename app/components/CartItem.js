import React from 'react';
import { View, StyleSheet, ImageBackground, Text, Image, Button } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Card from '../components/Card';
import defaultStyles from '../config/styles';
import QuantityButton from './QuantityButton';
import AppButton from './AppButton';

function CartItem({title, subtitle, quantity}) {
    return (
        <Card style={styles.card}> 
            <View style = {styles.textContainer}>
                <Text style={[defaultStyles.text5, styles.orderName]}>{title}</Text>
                <Text style={[defaultStyles.text6, styles.price]}>{subtitle}</Text>
            </View>

            <View style = {styles.buttonContainer}>
                <QuantityButton />
                <AppButton buttonStyle={styles.deleteButton}>
                    <MaterialCommunityIcons name='trash-can' color={defaultStyles.colors.white} size={20} style={styles.accountIcon} />
                </AppButton>
                
            </View>
        </Card> 
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 3
    },
    card: {
        marginTop: 8
    },
    deleteButton: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.primary,
        justifyContent: 'center',
        paddingHorizontal: 16
    }, 
    deleteText: {
        color: defaultStyles.colors.black,
        textTransform: 'capitalize'
    },
    orderName: {
        color: defaultStyles.colors.darkGray,
        fontWeight: '500',
        width: '60%'
    },
    price: {
        color: defaultStyles.colors.black,
        fontWeight: '400'
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default CartItem;