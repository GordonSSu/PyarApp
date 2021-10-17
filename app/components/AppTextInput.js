import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';

function AppTextInput({ containerStyle, icon, iconColor, placeholderColor, textStyle, ...otherProps }) {
    return (
        <View style={[styles.container, containerStyle]}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={iconColor} style={styles.icon} />}
            <TextInput placeholderTextColor={placeholderColor} style={textStyle} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 7
    },
    icon: {
        marginRight: 16
    }
})

export default AppTextInput;