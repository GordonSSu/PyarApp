import React from 'react';
import { View, StyleSheet } from 'react-native';

import defaultStyles from '../config/styles.js';

function Card({ children, style, ...otherProps }) {
    return (
        <View style={[styles.card, style]} {...otherProps}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: defaultStyles.colors.white,
        borderColor: defaultStyles.colors.lightGray,
        borderWidth: 1,
        paddingHorizontal: '6%',
        paddingVertical: 12
    }
})

export default Card;