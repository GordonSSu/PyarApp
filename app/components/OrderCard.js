import React from 'react';
import {View, StyleSheet,ImageBackground, Text} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../config/colors';
import defaultStyles from '../config/styles';

function OrderCard({title, subtitle, color, subtitle2, subtitle3, onPress}) {
    return (
        <View style={styles.card} backgroundColor={color}> 
                <Text style={defaultStyles.text9} > {title}</Text>
                <Text style={defaultStyles.text9} > {subtitle}</Text>
                <Text style={defaultStyles.text10} > {subtitle2}</Text>
        </View> 
    );
}

const styles = StyleSheet.create({
    card : {
        borderRadius: 15,
        overflow: "hidden",
        width: "31%",
        margin: 10,
        marginVertical: 10
    },


})

export default OrderCard;