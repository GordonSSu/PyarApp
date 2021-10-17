import React from 'react';
import { View } from 'react-native';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';

import firebase from '../config/firebase';

const ReCaptchaVerifier = (props) => {
    const recaptchaVerifier = props.recaptchaVerifier;
    return (
        <View>
            <FirebaseRecaptchaVerifierModal
                ref={recaptchaVerifier}
                firebaseConfig={firebase.app().options}
                attemptInvisibleVerification={true}
            />
            {true && FirebaseRecaptchaBanner}
        </View>
    );
}

export default ReCaptchaVerifier