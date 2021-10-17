import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Formik } from 'formik';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import defaultStyles from '../config/styles';
import ReCaptcha from '../api/ReCaptcha';

function OtpScreen({ navigation }) {
    return (
            <ImageBackground 
                style={styles.background} 
                source={require('../assets/welcome_screen_background.jpg')}>
                <View style={styles.logoContainer}>
                    <Image 
                        source={require('../assets/white_text_logo.png')} 
                        style={styles.logo}/>
                </View>
                
                <View style={styles.container}>
                    <Text style={[defaultStyles.text5, styles.titleText]}>OTP Verification</Text>
                    <Text style={[defaultStyles.text6, styles.subtitleText]}>Please enter the OTP verification code sent to +1**********</Text>
                
                    <View style={styles.line}/>

                    <ReCaptcha />
                    <Formik
                        initialValues={{ otp: '' }}
                        onSubmit={(values) => console.log(values)}
                        //validationSchema = {validationSchema}
                    >
                        {({ handleChange, handleSubmit }) => (
                            <>
                                <AppTextInput
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    containerStyle={styles.textInput}
                                    icon='lock'
                                    iconColor={defaultStyles.colors.white}
                                    keyboardType='number-pad'
                                    onChangeText={handleChange("otp")}
                                    placeholder='OTP'
                                    placeholderTextColor={defaultStyles.colors.mediumGray}
                                    textContentType="otp"
                                    textStyle={styles.inputText}
                                />

                                <AppButton buttonStyle={styles.button} onPress ={() => navigation.navigate("Register")}>
                                    <Text style={[defaultStyles.text4, styles.buttonText]}>Continue</Text>
                                </AppButton>
                            </>
                        )}
                    </Formik>
                </View>
            </ImageBackground>
    );
}

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        paddingTop: height * 0.1
    }, 
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
    inputText: {
        color: defaultStyles.colors.white
    },
    logo: {
        height: width * 0.4,
        width: width * 0.7
    }, 
    logoContainer: {
        alignItems: 'center'
    },
    subtitleText: {
        color: defaultStyles.colors.white,
        fontSize: 12,
        textAlign: 'center'
    },
    textInput: {
        borderColor: defaultStyles.colors.white,
        borderWidth: 3,
        padding: 7,
        marginVertical: 10
    },
    titleText: {
        color: defaultStyles.colors.white,
        fontWeight: 'bold'
    }
})

export default OtpScreen;