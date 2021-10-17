import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import defaultStyles from '../config/styles.js';

function TitleBar({ title, style }) {
    return (
        <View style={[styles.container, style]}>
            <Text style={[defaultStyles.text1, styles.title]}>{title}</Text>
        </View>
    );
}

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.white,
        borderBottomColor: defaultStyles.colors.lightGray,
        borderBottomWidth: 1,
        height: height * 0.1,
        justifyContent: 'flex-end',
        paddingHorizontal: '6%',
        paddingVertical: '1%',
        width: '100%'
    },
    title: {
        color: defaultStyles.colors.black,
        fontWeight: '700',
        textTransform: 'capitalize'
    }
})

export default TitleBar;