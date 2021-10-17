import React, { useRef, useState } from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Formik } from 'formik';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import defaultStyles from '../config/styles';

import firebase from '../config/firebase';
import ReCaptchaVerifier from '../api/ReCaptcha';

function LoginScreen({ navigation }) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);
  
    const sendVerification = () => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
            .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
            .then(setVerificationId)
            .catch((error) => {
                console.error(error);
                return false;
            });
        return true;
    };
  
    const confirmCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,
            code
        );
        firebase
            .auth()
            .signInWithCredential(credential)
            .then((result) => {
                console.log(result);
            }).catch((error) => {
                return false;
            });
        return true;
    };

    return (
        <ImageBackground 
            style={styles.background} 
            source={require('../assets/welcome_screen_background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../assets/white_text_logo.png')} 
                    style={styles.logo}
                />
            </View>
            <ReCaptchaVerifier recaptchaVerifier={recaptchaVerifier}/>
            <View style={styles.container}>
                <Text style={[defaultStyles.text5, styles.welcomeText]}>Welcome to the Pyar App!</Text>
                <Text style={[defaultStyles.text6, styles.instructionsText]}>Please enter your mobile phone number:</Text>
                
                <View style={styles.line}/>

                <Formik
                    initialValues={{ phoneNumber: '' }}
                    onSubmit={(values) => {console.log(values.phoneNumber); setPhoneNumber(values.phoneNumber)}}
                    //validationSchema = {validationSchema}
                >
                    {({ handleChange, handleSubmit }) => (
                        <>
                            <AppTextInput
                                autoCapitalize='none'
                                autoCorrect={false}
                                containerStyle={styles.textInput}
                                icon='phone'
                                iconColor={defaultStyles.colors.white}
                                keyboardType='phone-pad'
                                onChangeText={handleChange("phoneNumber")}
                                placeholder="Phone Number"
                                placeholderTextColor={defaultStyles.colors.mediumGray}
                                textContentType="phoneNumber"
                                textStyle={styles.inputText}
                            />

                            <AppButton buttonStyle={styles.button} onPress={() => {
                                    handleSubmit(); 
                                    const success = sendVerification(); 
                                    if (success) {
                                        navigation.navigate("OTP");
                                    } else {
                                        alert("Error");
                                    }
                                }}
                                >
                                <Text style={[defaultStyles.text5, styles.buttonText]}>Continue</Text>
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
    instructionsText: {
        color: defaultStyles.colors.white,
        fontSize: 12,
        textAlign: 'center'
    },
    line: {
        backgroundColor: defaultStyles.colors.white,
        borderRadius: 2,
        height: 3,
        margin: 16,
        width: '100%'
    },
    logo: {
        height: width * 0.4,
        width: width * 0.7
    }, 
    logoContainer: {
        alignItems: 'center'
    },
    textInput: {
        borderColor: defaultStyles.colors.white,
        borderWidth: 3,
        padding: 7,
        marginVertical: 10
    },
    welcomeText: {
        color: defaultStyles.colors.white,
        fontWeight: 'bold'
    }
})

export default LoginScreen;