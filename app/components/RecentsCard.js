import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Button } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Card from '../components/Card';
import defaultStyles from '../config/styles';
import QuantityButton from './QuantityButton';
import AppButton from './AppButton';
import colors from '../config/colors';


function RecentsCard({title, subtitle, price}) {
    return (
        <Card style={styles.card}>
            <View style = {styles.textContainer}>
                <Text style={[defaultStyles.text6, styles.orderName]}>{title}</Text>
                <Text style={[defaultStyles.text6, styles.price]}>{subtitle}</Text>
            </View>
            <View style = {styles.textContainer}>
                <Text style={[defaultStyles.text6, styles.price]}>{price}</Text>
                <TouchableOpacity onPress = {() => navigation.navigate("Recent Details")}>
                    <MaterialCommunityIcons name='chevron-right' color={defaultStyles.colors.mediumGray} size={30} style={styles.chevronIcon}/>
                </TouchableOpacity>
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
        borderColor: colors.mediumGray
    },
    deleteButton: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.primary,
        justifyContent: 'center',
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

export default RecentsCard;