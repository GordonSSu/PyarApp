import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import AppButton from '../components/AppButton';
import defaultStyles from '../config/styles';

const { width, height } = Dimensions.get('screen');

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground 
            style={styles.background} 
            source={require('../assets/welcome_screen_background.jpg')}>
            
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../assets/white_text_logo.png')} 
                    style={styles.logo}/>
            </View>

            <View style={styles.buttonContainer}>
                <AppButton buttonStyle={styles.button} onPress ={() => navigation.navigate("Login")}>
                    <Text style={[defaultStyles.text4, styles.buttonText]}>login or register</Text>
                </AppButton>
                {/* <AppButton buttonStyle={styles.button} onPress ={() => navigation.navigate("Register")}>
                    <Text style={[defaultStyles.text4, styles.buttonText]}>register</Text>
                </AppButton> */}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }, 
    button: {
        borderColor: defaultStyles.colors.white,
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
        marginVertical: 10,
        width: '100%'
    }, 
    buttonContainer: {
        marginBottom: '14%',
        padding: '6%',
        width: '100%'
    }, 
    buttonText: {
        color: defaultStyles.colors.white,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    }, 
    logo: {
        height: width * 0.4,
        width: width * 0.7
    }, 
    logoContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: '10%'
    }
})

export default WelcomeScreen;