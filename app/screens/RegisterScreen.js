import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Formik } from 'formik';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import defaultStyles from '../config/styles';

function RegisterScreen({navigation}) {
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

            <View style={styles.container}>
                <Text style={[defaultStyles.text5, styles.welcomeText]}>Welcome to the Pyar App!</Text>
                <Text style={[defaultStyles.text6, styles.instructionsText]}>Please fill out the following fields to complete your sign up:</Text>
                
                <View style={styles.line}/>

                <Formik
                    initialValues={{ firstName: '', lastName: '' }}
                    onSubmit={(values) => console.log(values)}
                    //validationSchema = {validationSchema}
                >
                    {({ handleChange, handleSubmit }) => (
                        <>
                            <AppTextInput
                                autoCapitalize='none'
                                autoCorrect={false}
                                containerStyle={styles.textInput}
                                icon='alpha-f-circle'
                                iconColor={defaultStyles.colors.white}
                                keyboardType="default"
                                onChangeText={handleChange("firstName")}
                                placeholder="First name"
                                placeholderTextColor={defaultStyles.colors.mediumGray}
                                textContentType="firstName"
                                textStyle={styles.inputText}
                            />

                            <AppTextInput
                                autoCapitalize="none"
                                autoCorrect={false}
                                containerStyle={styles.textInput}
                                icon="alpha-l-circle"
                                iconColor={defaultStyles.colors.white}
                                keyboardType="default"
                                onChangeText={handleChange("lastName")}
                                placeholder="Last Name"
                                placeholderTextColor={defaultStyles.colors.mediumGray}
                                textContentType="lastName"
                                textStyle={styles.inputText}
                            />

                            <AppButton buttonStyle={styles.button} onPress={() => { navigation.navigate("OTP"), handleSubmit }}>
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

export default RegisterScreen;