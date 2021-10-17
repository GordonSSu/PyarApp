import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import Card from '../components/Card';
import AppButton from '../components/AppButton';

function StopTakingOrdersScreen(props) {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>This function will stop all app orders to your store until you manually start taking orders again. </Text>
            <Text style = {styles.text}>To start taking orders please go to the manager screen. </Text>
            <AppButton buttonStyle = {styles.button}> 
                <Text style = {styles.buttonText}> Confirm to stop taking orders. </Text>
            </AppButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 70,
        backgroundColor: colors.primary,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    }, 
    button: {
        backgroundColor: colors.white,
        alignItems: 'center',
        width:'55%',
        marginTop: '10%',
    },
    text:{
        color: colors.white,
        fontSize: 25,
        alignSelf: 'center',
        alignItems: 'center'

    },
    buttonText:{
        color: colors.primary,
        fontSize: 21,

    }

})


export default StopTakingOrdersScreen;