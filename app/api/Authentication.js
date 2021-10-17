import React, { useRef, useState } from 'react';
import { TouchableOpacity, Text, TextInput, View } from 'react-native';

import firebase from '../config/firebase';
import styles from '../config/test';
import ReCaptchaVerifier from './ReCaptcha';

/*
const recaptchaVerifier = useRef(null);

const sendVerification = (phoneNumber) => {
  const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId);
}

const confirmCode = (code) => {
  const credential = firebase.auth.PhoneAuthProvider.credential(
    verificationId,
    code
  );
  firebase
    .auth()
    .signInWithCredential(credential)
    .then((result) => {
      console.log(result);
    });
};*/


export default Authentication = () => {
  const [ phoneNumber, setPhoneNumber ] = useState('');
  const [ code, setCode ] = useState('');
  const [ verificationId, setVerificationId ] = useState(null);
  const recaptchaVerifier = useRef(null);

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId);
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
      });
  };
  
  return (
    <View>
      <ReCaptchaVerifier recaptchaVerifier={recaptchaVerifier}/>
      <TextInput
        placeholder="Phone Number"
        onChangeText={(setPhoneNumber)}
        keyboardType="phone-pad"
        autoCompleteType="tel"
        style={styles.textInput}
      />
      <TouchableOpacity
        style={styles.sendVerification}
        onPress={sendVerification}
      >
        <Text style={styles.buttonText}>Send Verification</Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Confirmation Code"
        onChangeText={setCode}
        keyboardType="number-pad"
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.sendCode} onPress={confirmCode}>
        <Text style={styles.buttonText}>Send Verification</Text>
      </TouchableOpacity>
    </View>
  );
};