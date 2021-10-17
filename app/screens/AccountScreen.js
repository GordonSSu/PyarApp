import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import Card from '../components/Card';
import TitleBar from '../components/TitleBar';
import defaultStyles from '../config/styles.js';

function AccountScreen({navigation}) {
    return (
        <>
        <TitleBar title={'Account'}/>
        <Screen style={styles.screen}>
        <ScrollView>
            <Card style={styles.card}>
                <Text style={[defaultStyles.text5, styles.subtitle]}>someswar amujala</Text>
                <View style={styles.accountSection}>
                    <View>
                        <View style={styles.textRow}>
                            <MaterialCommunityIcons name='phone' color={defaultStyles.colors.primary} size={20}  style={styles.accountIcon}/>
                            <Text style={defaultStyles.text7}>(408) 123-4567</Text>
                        </View>
                        
                        <View style={styles.textRow}>
                            <MaterialCommunityIcons name='home' color={defaultStyles.colors.primary} size={20}  style={styles.accountIcon}/>
                            <Text style={defaultStyles.text7}>12345 Example St,{'\n'}San Jose CA 12345</Text>
                        </View>
                    </View>
                    
                    <TouchableOpacity  onPress = { () => {navigation.navigate("Personal Information")}}>
                        <MaterialCommunityIcons name='chevron-right' color={defaultStyles.colors.mediumGray} size={30} style={styles.chevronIcon}/>
                        
                    </TouchableOpacity >
                </View>

                <View style={styles.line} />
                
                <Text style={[defaultStyles.text5, styles.subtitle]}>payment information</Text>
                <View style={styles.accountSection}>
                    <View>
                        <View style={styles.textRow}>
                            <MaterialCommunityIcons name='credit-card-outline' color={defaultStyles.colors.primary} size={20}  style={styles.accountIcon}/>
                            <Text style={defaultStyles.text7}>Card: 1234 **** **** ****{'\n'}Someswar Middle Name Amujala</Text>
                        </View>
                    </View>
                
                    <TouchableOpacity onPress = { () => {navigation.navigate("Payment Information")}}>
                        <MaterialCommunityIcons name='chevron-right' color={defaultStyles.colors.mediumGray} size={30} style={styles.chevronIcon}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.line} />
                    
                <View style={styles.accountSection}>  
                    <View style={styles.textRow}>
                        <MaterialCommunityIcons name='history' color={defaultStyles.colors.primary} size={20}  style={styles.accountIcon}/>
                        <Text style={[defaultStyles.text6, styles.recentOrdersText]}>recent orders</Text>
                    </View>
                
                    <TouchableOpacity onPress={() => { navigation.navigate("Recents") }}>
                            <MaterialCommunityIcons name='chevron-right' color={defaultStyles.colors.mediumGray} size={30} style={styles.chevronIcon}/>
                    </TouchableOpacity>
                </View>
            </Card>

            <View style={styles.bottomButtonContainer}>
                <AppButton buttonStyle={styles.logOutButton}>
                    <Text style={[defaultStyles.text5, styles.logOutText]}>log out</Text>
                </AppButton>

                <TouchableOpacity style={styles.privacyButton}>
                    <Text style={[defaultStyles.text7, styles.privacyText]}>privacy policy</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    accountIcon: {
        marginRight: 14
    },
    accountSection: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '6%'
    },
    bottomButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '6%',
        width: '100%'
    },
    card: {
        marginVertical: 14,
        paddingHorizontal: 0
    },
    chevronIcon: {
        marginRight: -8
    },
    line: {
        backgroundColor: defaultStyles.colors.lightGray,
        height: 1,
        marginVertical: 10,
        width: '100%',
        marginLeft: '6%'
    },
    privacyButton: {
        marginTop: 6
    },
    privacyText: {
        color: defaultStyles.colors.mediumGray,
        textTransform: 'capitalize'
    },
    logOutButton: {
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.primary,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
    logOutText: {
        color: defaultStyles.colors.white,
        fontWeight: '600',
        textTransform: 'capitalize'
    },
    recentOrdersText: {
        color: defaultStyles.colors.darkGray,
        fontWeight: '500',
        textTransform: 'capitalize'
    },
    screen: {
        flex: 1
    },
    subtitle: {
        color: defaultStyles.colors.darkGray,
        fontWeight: '500',
        marginBottom: 4,
        textAlign: 'center',
        textTransform: 'capitalize'
    },
    textRow: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 4
    }
})

export default AccountScreen;