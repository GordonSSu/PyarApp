import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, ScrollView, Text, View, Button } from 'react-native';
import { Marker } from 'react-native-maps';

import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import defaultStyles from '../config/styles';
import Card from '../components/Card';
import TitleBar from '../components/TitleBar';

function RestaurantDetailsScreen(props) {
    return (
        <>
        <TitleBar title={'Restaurant Details'}/>
        <Screen style={styles.screen}>
        <ScrollView>
            <MapView style={styles.map} 
                initialRegion={{
                    latitude: 37.299887,
                    longitude: -121.771400,
                    latitudeDelta: 0.00922,
                    longitudeDelta: 0.00421,
                }}>
                <Marker 
                    title= "Pyar Restaurant" 
                    coordinate =  {{latitude: 37.299887, longitude: -121.771400}}
                    />
            </MapView>
            <Card style={[styles.card, {marginTop: 0}]}>
                <Text style={[defaultStyles.text5, styles.subtitle]}>Address</Text>
                <Text style={[defaultStyles.text7, styles.textRow]}>4898 San Felipe Road{'\n'}Ste 150, San Jose{'\n'}CA 95135</Text>
                    
                <AppButton buttonStyle={styles.directionsButton}><Text style={[defaultStyles.text5, styles.directionsText]}>Directions</Text></AppButton>
            </Card>
            
            <Card style={styles.card}>
                <Text style={[defaultStyles.text5, styles.subtitle]}>Hours</Text>
                <Text style={[defaultStyles.text7, styles.textRow]}><Text style={styles.day}>Mon - Tues:</Text>    <Text style={styles.closedText}>Closed</Text></Text>
                <Text style={[defaultStyles.text7, styles.textRow]}><Text style={styles.day}>Wed - Thurs:</Text>  5:00PM - 8:30PM</Text>
                <Text style={[defaultStyles.text7, styles.textRow]}><Text style={styles.day}>Fri  - Sun:</Text>        5:00PM - 9:00PM</Text>
            </Card>
                
            <Card style={styles.card}>
                <Text style={[defaultStyles.text5, styles.subtitle]}>Contact</Text>
                <Text style={[defaultStyles.text7, styles.textRow, styles.linkText]}>https://www.pyarrestaurant.com</Text>
                <Text style={[defaultStyles.text7, styles.textRow]}>(408) 440-8947</Text>
                <Text style={[defaultStyles.text7, styles.textRow]}>info@pyarrestaurant.com</Text>
            </Card>
        </ScrollView>
        </Screen>
        </>
    );
}
const styles = StyleSheet.create({
    card: {
        padding: 22,
        paddingHorizontal: 30,
        marginTop: 10
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    closedText: {
        color: 'red'
    },
    day: {
        color: defaultStyles.colors.darkGray,
        fontWeight: '600'
    },
    directionsButton: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.primary,
        justifyContent: 'center',
        marginVertical: 8
    },
    directionsText: {
        color: defaultStyles.colors.white,
        fontWeight: '600',
        textTransform: 'capitalize'
    },
    linkText: {
        color: 'blue'
    },
    map: {
        padding: 20,
        width: '100%',
        height: '51%'
    },
    screen: {
        flex: 1
    },
    subtitle: {
        color: defaultStyles.colors.black,
        fontWeight: '500',
        marginBottom: 4,
        textAlign: 'center',
        textTransform: 'capitalize'
    },
    textRow: {
        color: defaultStyles.colors.darkGray,
        marginVertical: 2
    }
  });

export default RestaurantDetailsScreen;