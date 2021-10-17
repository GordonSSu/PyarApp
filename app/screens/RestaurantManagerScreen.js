import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import Card from '../components/Card';
import AppButton from '../components/AppButton';

function RestaurantManagerScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style = {defaultStyles.text9}>Manager Profile</Text>
            <Card style = {styles.orderCard}> 
                <Text style= {defaultStyles.text9}> Your Restaurant is currently open and Taking orders. </Text>
                <AppButton buttonStyle = {styles.button}>
                    <Text style = {defaultStyles.managerScreenButton} onPress={() => { navigation.navigate("Stop Orders") }}> Temporarily Stop Taking Orders </Text>
                </AppButton>
                <AppButton buttonStyle = {styles.button} onPress={() => { navigation.navigate("Edit Hours") }}>
                    <Text style = {defaultStyles.managerScreenButton}> Edit Store Operating Hours </Text>
                </AppButton>
            </Card>
            <Card style = {styles.orderCard}> 
                <Text style= {defaultStyles.text9}> Items out of stock? </Text>
                <AppButton buttonStyle = {styles.button}>
                    <Text style = {defaultStyles.managerScreenButton}> Edit Menu Item Availability </Text>
                </AppButton>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
    }, 
    orderCard: {
        backgroundColor: colors.lightGray,
        borderColor: colors.darkGray,
        alignItems: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: colors.primary,
        alignItems: 'center',
        width: '40%',
        marginVertical:40
    }

})



export default RestaurantManagerScreen;