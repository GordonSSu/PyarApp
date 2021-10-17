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
            <Card style={styles.card}>
                <Formik
                    initialValues= {{FirstName: '', LastName: '', Address: '', City: '', ZipCode: '', State: ''}}
                    onSubmit={values => console.log(values)}
                >

                    {( {handleChange, handleSubmit}) => (
                        <>
                            <AppTextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                containerStyle={styles.textInput}
                                keyboardType="text"
                                onChangeText={handleChange("FirstName")}
                                placeholder="Someswar"
                                textContentType="text"
                            />

                            <AppTextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                containerStyle={styles.textInput}
                                keyboardType="text"
                                onChangeText={handleChange("LastName")}
                                placeholder="Amujala"
                                textContentType="text"
                            />

                            <AppTextInput
                                autoCorrect={false}
                                containerStyle={styles.textInput}
                                onChangeText={handleChange("Address")}
                                keyboardType="text"
                                placeholder="123 WestFawn Lane"
                            />

                            <AppTextInput
                                autoCorrect={false}
                                containerStyle={styles.textInput}
                                onChangeText={handleChange("City")}
                                keyboardType="text"
                                placeholder="San Jose"
                            />
                                
                            <AppTextInput
                                autoCorrect={false}
                                containerStyle={styles.textInput}
                                onChangeText={handleChange("ZipCode")}
                                keyboardType="number-pad"
                                placeholder="95123"
                            />

                            <AppTextInput
                                autoCorrect={false}
                                containerStyle={styles.textInput}
                                onChangeText={handleChange("State")}
                                keyboardType="text"
                                placeholder="California"
                            />
                                
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
    card: {
        marginVertical: 14
    },
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
    },
    textInput: {
        borderColor: defaultStyles.colors.lightGray,
        borderWidth: 2,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 6
    }
})

export default AccountScreenPayment;