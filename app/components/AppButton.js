import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function AppButton({ buttonStyle, children, onPress, ...otherProps }) {
    return (
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress} {...otherProps}>
            {children}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 40, // arbitrarily large border radius to ensure all buttons are rounded
        paddingHorizontal: 20,
        paddingVertical: 6
    }
})

export default AppButton;