import React from 'react';
import { View, StyleSheet,ImageBackground, Text, TouchableOpacity, Image } from 'react-native'
import defaultStyles from '../config/styles';

function MenuCard({title, subtitle, image, onPress}) {
    let Image_Http_URL ={ uri: image};
    return (
        <TouchableOpacity onPress = {onPress}>
            <View style={styles.card}> 
                <ImageBackground imageStyle = {styles.imagestylez} style={styles.image} source={Image_Http_URL}>
                    <View style={styles.imagedarken}>
                        <Text style={[defaultStyles.text5, defaultStyles.menuCardName]}> {title}</Text>
                        <Text style={[defaultStyles.text6, defaultStyles.menuCardPrice]}> {subtitle}</Text>
                    </View>
                </ImageBackground>
            </View> 
        </TouchableOpacity> 
    );
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: 'black',
        marginBottom: 20,
        overflow: "hidden",
        width: 170,
        height: 150,
    },
    detailsContainer:{
        padding: 0,
    },
    image : {
        width: "100%",
        height: 150,
    },
    imagestylez : {
        opacity: 0.5
    },
    imagedarken:{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
})

export default MenuCard;