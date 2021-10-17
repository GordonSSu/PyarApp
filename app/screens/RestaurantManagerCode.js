import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import defaultStyles from '../config/styles';

function RestaurantManagerCode({navigation}) {
    return (

                <View style={styles.container}>
                    <Text style={[defaultStyles.text9]}>Restaurant Manager Login</Text>
                    <Text style={[defaultStyles.text10]}>Please enter the Manager Approval Code: </Text>
                    <AppTextInput
                        autoCapitalize='none'
                        autoCorrect={false}
                        containerStyle={styles.textInput}
                        icon='lock'
                        iconColor={defaultStyles.colors.white}
                        keyboardType='number-pad'
                        placeholder='Manager Code'
                        placeholderTextColor={defaultStyles.colors.mediumGray}
                        textContentType="none"
                        textStyle={styles.text9}
                    />
                    <AppButton buttonStyle={styles.button} onPress={() => { navigation.navigate("Manager Screen") }}>
                        <Text style={[defaultStyles.text4, styles.buttonText]}>Continue</Text>
                    </AppButton>
    </View>
    );
}

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    button: {
        backgroundColor: defaultStyles.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
        marginVertical: 18,
        width: '100%'
    }, 
    container: {
        alignItems: 'center',
        padding: '6%',
        width: '100%'
    }, 
    buttonText: {
        color: defaultStyles.colors.white,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    }, 
    textInput: {
        borderColor: defaultStyles.colors.black,
        borderWidth: 3,
        padding: 7,
        marginVertical: 10,
        marginHorizontal: 30,
        width: '40%'
    }
})

export default RestaurantManagerCode;