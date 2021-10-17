import React from 'react';
import { FlatList, View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import {Formik} from 'formik';

import Card from '../components/Card';
import RecentsCard from '../components/RecentsCard';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import defaultStyles from '../config/styles';

const PaymentInformation= [
];

function AccountScreenPayment({navigation}) {
    return (
        <Screen>
            <Card>
                <Formik
                initialValues= {{CardName: '', ExpDate: '', CardNumber: ''}}
                onSubmit={values => console.log(values)}
                >

                    {( {handleChange, handleSubmit}) => (
                        <>
                <AppTextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="text"
                    onChangeText={handleChange("CardName")}
                    placeholder="Card Name"
                    textContentType="text"
                    secureTextEntry
                >
                </AppTextInput>

                <AppTextInput
                    autoCorrect={false}
                    onChangeText={handleChange("CardNumber")}
                    keyboardType="number-pad"
                    placeholder="####-####-####-####"
                    secureTextEntry
                >
                </AppTextInput>
                <AppTextInput
                    autoCorrect={false}
                    onChangeText={handleChange("ExpDate")}
                    keyboardType="number-pad"
                    placeholder="01/12"
                    secureTextEntry
                >
                </AppTextInput>
                <AppButton 
                    buttonStyle = {styles.saveButton}
                    onPress={handleSubmit} 
                >
                    <Text style = {styles.saveText}>Save</Text>
                </AppButton>
                        </>
                    )}
                </Formik>
            </Card>
        </Screen>
    );
}

const styles = StyleSheet.create ({
    saveButton: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
    saveText: {
        color: defaultStyles.colors.white,
        fontWeight: '600',
        textTransform: 'capitalize'
    }
})

export default AccountScreenPayment;