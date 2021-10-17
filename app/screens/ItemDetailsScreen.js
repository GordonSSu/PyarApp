import React from 'react';
import { View , Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {connect} from 'react-redux';

import AppButton from '../components/AppButton';
import Card from '../components/Card';
import defaultStyles from '../config/styles';
import QuantityButton from '../components/QuantityButton';

function ItemDetailsScreen( { route }) {
    const item = route.params;

    return (
        <View>
            <Image style={styles.image} source={item.image} />
            
            <Card style={styles.card}>
                <View style={styles.descriptionSection}> 
                    <Text style = {[defaultStyles.text3, styles.title]}>{item.name}</Text>
                    <Text style={[defaultStyles.text5, styles.price]}>${item.price}</Text>
                    <Text style={[defaultStyles.text7, styles.description]}>{item.description}</Text>
                </View>
                    
                <View style={styles.line} />

                <View style={styles.customizeSection}>  
                    <Text style={[defaultStyles.text6, styles.customizeText]}>customize order</Text>
                
                    <TouchableOpacity>
                        <MaterialCommunityIcons name='chevron-right' color={defaultStyles.colors.mediumGray} size={30} style={styles.chevronIcon}/>
                    </TouchableOpacity>
                </View>
            </Card>

            <View style={styles.buttonContainer}>
                <QuantityButton />

                <AppButton buttonStyle={styles.cartButton} onPress={this.props.addItemToCart}>
                    <Text style = {styles.textCart}>Add to Cart</Text>
                </AppButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        paddingHorizontal: '6%',
        paddingVertical: 14
    },
    card: {
        paddingHorizontal: 0
    },
    cartButton: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.primary,
        justifyContent: 'center',
        marginTop: 14,
        width: '100%'
    },
    chevronIcon: {
        marginRight: -8
    },
    customizeSection: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '6%'
    },
    customizeText: {
        color: defaultStyles.colors.darkGray,
        fontWeight: '500',
        textTransform: 'capitalize'
    },
    description:{
        marginVertical: 10
    },
    descriptionSection: {
        paddingHorizontal: '6%'
    },
    image: {
        width: '100%',
        height: '46%'
    },
    line: {
        backgroundColor: defaultStyles.colors.lightGray,
        height: 1,
        marginLeft: '6%',
        marginVertical: 10,
        width: '100%'
    },
    price:{
        color: defaultStyles.colors.primary,
        fontWeight: '400',
        marginTop: 4,
    },
    title:{
        fontWeight: '600'
    },
    textCart: {
        color: defaultStyles.colors.white,
        fontWeight: 'bold'
    }
})

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
    }
}

export default connect(null, mapDispatchToProps)(ItemDetailsScreen);
