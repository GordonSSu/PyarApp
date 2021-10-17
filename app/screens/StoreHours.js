import React from 'react';
import { Dimensions, Image, Button, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import Card from '../components/Card';
import AppButton from '../components/AppButton';
import DateTimePicker from '@react-native-community/datetimepicker';
    
function StoreHours(props) {
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showTimepicker = () => {
        showMode('time');
      };

    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Sunday Hours: </Text>
            <DateTimePicker value={new Date()} />
            <Text style = {styles.text}>Monday Hours: </Text>
            <Text style = {styles.text}>Tuesday Hours: </Text>
            <Text style = {styles.text}>Wednesday Hours: </Text>
            <Text style = {styles.text}>Thursday Hours: </Text>
            <Text style = {styles.text}>Friday Hours: </Text>
            <Text style = {styles.text}>Saturday Hours: </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 70,
        backgroundColor: colors.paleGray,
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
        color: colors.black,
        fontSize: 25,
        alignSelf: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: colors.primary,
        fontSize: 21,
    }
})

export default StoreHours;