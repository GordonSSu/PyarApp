import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import AppButton from './AppButton';
import Screen from '../components/Screen'

import defaultStyles from '../config/styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

function QuantityButton(props) {
    return (
        <View style = {styles.container}>
            <TouchableOpacity>
                <Text style={styles.changeQuantity}> - </Text>
            </TouchableOpacity>

            <Text style={styles.quantity}> 3 </Text>

            <TouchableOpacity>
                <Text style={styles.changeQuantity}> + </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    changeQuantity: {
        color: defaultStyles.colors.primary
    },
    container: {
        backgroundColor: defaultStyles.colors.white,
        borderColor: defaultStyles.colors.lightGray,
        borderRadius: 70,
        borderWidth: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 2,
        width: 110
    },
    quantity:{
        color: defaultStyles.colors.black
    }
})

export default QuantityButton;