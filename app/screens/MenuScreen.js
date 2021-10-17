import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';

import AppButton from '../components/AppButton';
import Card from '../components/Card';
import MenuCard from '../components/MenuCard';
import Screen from '../components/Screen';
import TitleBar from '../components/TitleBar';
import defaultStyles from '../config/styles';

const largePlates = [
    {
        id: 1,
        name: 'Pan Fried Salmon',
        price: 25.99,
        image: require("../assets/PanFriedSalmon.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 2,
        name: 'Kuska and Kurma',
        price: 15.99,
        image: require("../assets/KuskaAndKurma.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 3,
        name: 'Fire Roasted Shrimp Skewers',
        price: 15.99,
        image: require("../assets/FireRoastedShrimpSkewers.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 4,
        name: 'Mumbai Pav Bhaji',
        price: 15.99,
        image: require("../assets/MumbaiPavBhaji.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    }
];

const smallPlates = [
    {
        id: 1,
        name: 'Pan Fried Salmon',
        price: 25.99,
        image: require("../assets/PanFriedSalmon.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 2,
        name: 'Pyar Wings',
        price: 12.99,
        image: require("../assets/PyarWings.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 3,
        name: 'Kuska and Kurma',
        price: 15.99,
        image: require("../assets/KuskaAndKurma.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 4,
        name: 'Mumbai Pav Bhaji',
        price: 15.99,
        image: require("../assets/MumbaiPavBhaji.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 5,
        name: 'Pan Fried Salmon',
        price: 25.99,
        image: require("../assets/PanFriedSalmon.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 6,
        name: 'Pyar Wings',
        price: 12.99,
        image: require("../assets/PyarWings.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 7,
        name: 'Fire Roasted Shrimp Skewers',
        price: 15.99,
        image: require("../assets/FireRoastedShrimpSkewers.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 8,
        name: 'Garlic Burrata Platter',
        price: 15.99,
        image: require("../assets/GarlicBurrataPlatter.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
];

const curries = [
    {
        id: 1,
        name: 'Pan Fried Salmon',
        price: 25.99,
        image: require("../assets/PanFriedSalmon.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 2,
        name: 'Kuska and Kurma',
        price: 15.99,
        image: require("../assets/KuskaAndKurma.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 3,
        name: 'Fire Roasted Shrimp Skewers',
        price: 15.99,
        image: require("../assets/FireRoastedShrimpSkewers.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 4,
        name: 'Mumbai Pav Bhaji',
        price: 15.99,
        image: require("../assets/MumbaiPavBhaji.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    }
];

const sides = [
    {
        id: 1,
        name: 'Pan Fried Salmon',
        price: 25.99,
        image: require("../assets/PanFriedSalmon.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 2,
        name: 'Pyar Wings',
        price: 12.99,
        image: require("../assets/PyarWings.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 3,
        name: 'Kuska and Kurma',
        price: 15.99,
        image: require("../assets/KuskaAndKurma.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 4,
        name: 'Mumbai Pav Bhaji',
        price: 15.99,
        image: require("../assets/MumbaiPavBhaji.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 5,
        name: 'Pan Fried Salmon',
        price: 25.99,
        image: require("../assets/PanFriedSalmon.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 6,
        name: 'Pyar Wings',
        price: 12.99,
        image: require("../assets/PyarWings.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 7,
        name: 'Fire Roasted Shrimp Skewers',
        price: 15.99,
        image: require("../assets/FireRoastedShrimpSkewers.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 8,
        name: 'Garlic Burrata Platter',
        price: 15.99,
        image: require("../assets/GarlicBurrataPlatter.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
];

const drinks = [
    {
        id: 1,
        name: 'Pan Fried Salmon',
        price: 25.99,
        image: require("../assets/PanFriedSalmon.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 2,
        name: 'Pyar Wings',
        price: 12.99,
        image: require("../assets/PyarWings.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 3,
        name: 'Kuska and Kurma',
        price: 15.99,
        image: require("../assets/KuskaAndKurma.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 4,
        name: 'Mumbai Pav Bhaji',
        price: 15.99,
        image: require("../assets/MumbaiPavBhaji.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 5,
        name: 'Pyar Wings',
        price: 12.99,
        image: require("../assets/PyarWings.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 6,
        name: 'Fire Roasted Shrimp Skewers',
        price: 15.99,
        image: require("../assets/FireRoastedShrimpSkewers.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 7,
        name: 'Garlic Burrata Platter',
        price: 15.99,
        image: require("../assets/GarlicBurrataPlatter.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 8,
        name: 'Mumbai Pav Bhaji',
        price: 15.99,
        image: require("../assets/MumbaiPavBhaji.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
];

const desserts = [
    {
        id: 1,
        name: 'Pan Fried Salmon',
        price: 25.99,
        image: require("../assets/PanFriedSalmon.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 2,
        name: 'Kuska and Kurma',
        price: 15.99,
        image: require("../assets/KuskaAndKurma.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 3,
        name: 'Fire Roasted Shrimp Skewers',
        price: 15.99,
        image: require("../assets/FireRoastedShrimpSkewers.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 4,
        name: 'Mumbai Pav Bhaji',
        price: 15.99,
        image: require("../assets/MumbaiPavBhaji.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 5,
        name: 'Pyar Wings',
        price: 12.99,
        image: require("../assets/PyarWings.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
    {
        id: 6,
        name: 'Fire Roasted Shrimp Skewers',
        price: 15.99,
        image: require("../assets/FireRoastedShrimpSkewers.jpg"),
        description: "Golden crisp on top and just barely cooked in the center, this pan seared salmon is at once homely and elegant, a true delicacy that will doubtless become a family favorite."
    },
];









const { width, height } = Dimensions.get('screen');

function MenuScreen({navigation}) {
    const menuList = React.useRef();
    const categoryList = React.useRef();

    const [largeX, setLargeX] = useState(0);
    const [smallX, setSmallX] = useState(0);
    const [curriesX, setCurriesX] = useState(0);
    const [sidesX, setSidesX] = useState(0);
    const [drinksX, setDrinksX] = useState(0);
    const [dessertsX, setDessertsX] = useState(0);

    const [largeY, setLargeY] = useState(0);
    const [smallY, setSmallY] = useState(0);
    const [curriesY, setCurriesY] = useState(0);
    const [sidesY, setSidesY] = useState(0);
    const [drinksY, setDrinksY] = useState(0);
    const [dessertsY, setDessertsY] = useState(0);

    const [onLarge, setOnLarge] = useState(true);
    const [onSmall, setOnSmall] = useState(false);
    const [onCurries, setOnCurries] = useState(false);
    const [onSides, setOnSides] = useState(false);
    const [onDrinks, setOnDrinks] = useState(false);
    const [onDesserts, setOnDesserts] = useState(false);

    const handleScroll = event => {
        // console.log(largeX);
        // console.log(smallX);
        // console.log(curriesX);
        // console.log(sidesX);
        // console.log(drinksX);
        // console.log(dessertsX);

        const yPos = event.nativeEvent.contentOffset.y;

        if (yPos < (smallY - 150)) {
            categoryList.current.scrollTo({ x: largeX - width * 0.06, animated: true });
            setOnLarge(true);
            setOnSmall(false);
            setOnCurries(false);
            setOnSides(false);
            setOnDrinks(false);
            setOnDesserts(false);
        } else if (yPos < (curriesY - 150)) {
            categoryList.current.scrollTo({ x: smallX - width * 0.06, animated: true });
            setOnLarge(false);
            setOnSmall(true);
            setOnCurries(false);
            setOnSides(false);
            setOnDrinks(false);
            setOnDesserts(false);
        }  else if (yPos < (sidesY - 150)) {
            categoryList.current.scrollTo({ x: curriesX - width * 0.06, animated: true });
            setOnLarge(false);
            setOnSmall(false);
            setOnCurries(true);
            setOnSides(false);
            setOnDrinks(false);
            setOnDesserts(false);
        } else if (yPos < (drinksY - 150)) {
            categoryList.current.scrollTo({ x: sidesX - width * 0.06, animated: true });
            setOnLarge(false);
            setOnSmall(false);
            setOnCurries(false);
            setOnSides(true);
            setOnDrinks(false);
            setOnDesserts(false);
        } else if (yPos < (dessertsY - 150)) {
            categoryList.current.scrollTo({ x: drinksX - width * 0.06, animated: true });
            setOnLarge(false);
            setOnSmall(false);
            setOnCurries(false);
            setOnSides(false);
            setOnDrinks(true);
            setOnDesserts(false);
        } else {
            categoryList.current.scrollTo({ x: dessertsX - width * 0.06, animated: true });
            setOnLarge(false);
            setOnSmall(false);
            setOnCurries(false);
            setOnSides(false);
            setOnDrinks(false);
            setOnDesserts(true);
        }
    };

    return (
        <>
        <TitleBar title={'menu'} style={styles.titleBar}/>
        <View style={styles.buttonContainer}>
            <ScrollView
                ref={categoryList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoryScrollContainer}
            >
                <AppButton buttonStyle={[styles.categoryButton, { backgroundColor: (onLarge) ? defaultStyles.colors.primary : defaultStyles.colors.white }]}
                    onLayout={(event) => {setLargeX(event.nativeEvent.layout.x);}}
                    onPress={() => {
                        menuList.current.scrollTo({ y: largeY, animated: true });
                }}>
                    <Text style={[defaultStyles.text6, styles.categoryButtonText, {color: (onLarge) ? defaultStyles.colors.white : defaultStyles.colors.mediumGray}]}>large plates</Text>
                </AppButton>
                    
                <AppButton buttonStyle={[styles.categoryButton, {backgroundColor: (onSmall) ? defaultStyles.colors.primary : defaultStyles.colors.white}]}
                    onLayout={(event) => {setSmallX(event.nativeEvent.layout.x);}}
                    onPress={() => {
                        menuList.current.scrollTo({ y: smallY, animated: true });
                }}>
                    <Text style={[defaultStyles.text6, styles.categoryButtonText, {color: (onSmall) ? defaultStyles.colors.white : defaultStyles.colors.mediumGray}]}>small plates</Text>
                </AppButton>
                
                <AppButton buttonStyle={[styles.categoryButton, {backgroundColor: (onCurries) ? defaultStyles.colors.primary : defaultStyles.colors.white}]}
                    onLayout={(event) => {setCurriesX(event.nativeEvent.layout.x);}}
                    onPress={() => {
                        menuList.current.scrollTo({ y: curriesY, animated: true });
                }}>
                    <Text style={[defaultStyles.text6, styles.categoryButtonText, {color: (onCurries) ? defaultStyles.colors.white : defaultStyles.colors.mediumGray}]}>curries</Text>
                </AppButton>
                    
                <AppButton buttonStyle={[styles.categoryButton, {backgroundColor: (onSides) ? defaultStyles.colors.primary : defaultStyles.colors.white}]}
                    onLayout={(event) => {setSidesX(event.nativeEvent.layout.x);}}
                    onPress={() => {
                        menuList.current.scrollTo({ y: sidesY, animated: true });
                }}>
                    <Text style={[defaultStyles.text6, styles.categoryButtonText, {color: (onSides) ? defaultStyles.colors.white : defaultStyles.colors.mediumGray}]}>sides</Text>
                </AppButton>
                
                <AppButton buttonStyle={[styles.categoryButton, {backgroundColor: (onDrinks) ? defaultStyles.colors.primary : defaultStyles.colors.white}]}
                    onLayout={(event) => {setDrinksX(event.nativeEvent.layout.x);}}
                    onPress={() => {
                        menuList.current.scrollTo({ y: drinksY, animated: true });
                }}>
                    <Text style={[defaultStyles.text6, styles.categoryButtonText, {color: (onDrinks) ? defaultStyles.colors.white : defaultStyles.colors.mediumGray}]}>drinks</Text>
                </AppButton>
                
                <AppButton buttonStyle={[styles.categoryButton, {backgroundColor: (onDesserts) ? defaultStyles.colors.primary : defaultStyles.colors.white}]}
                    onLayout={(event) => {setDessertsX(event.nativeEvent.layout.x);}}
                    onPress={() => {
                        menuList.current.scrollTo({ y: dessertsY, animated: true });
                }}>
                    <Text style={[defaultStyles.text6, styles.categoryButtonText, {color: (onDesserts) ? defaultStyles.colors.white : defaultStyles.colors.mediumGray}]}>desserts</Text>
                </AppButton>
            
            </ScrollView>
        </View>     

        <Screen>
        <ScrollView
            ref={menuList}
            onScroll={handleScroll}
            scrollEventThrottle={100}
        >
            <Card style={styles.categoryCard}
                onLayout={(event) => {setLargeY(event.nativeEvent.layout.y);}}
            >
                <Text style={[defaultStyles.text4, styles.categoryTitle]}>large plates</Text>
                <Text style={[defaultStyles.text7, styles.categoryDescription]}>These large plates are great</Text>
                <FlatList
                    data={largePlates}
                    numColumns = {2}
                    columnWrapperStyle= {{justifyContent: "space-between"}}
                    keyExtractor = {(items) => items.id.toString()}
                    renderItem = {({item}) =>
                        < MenuCard
                            onLayout = {(e)=>console.log(e.nativeEvent.layout.y)}
                            title= {item.name}
                            subtitle = {"$" + item.price}
                            image = {item.image}
                            onPress = {() => navigation.navigate("ItemDetails", item)}
                        />}
                    scrollEnabled='false'
                />
            </Card>
            
            <Card style={styles.categoryCard}
                onLayout={(event) => {setSmallY(event.nativeEvent.layout.y);}}
            >
                <Text style={[defaultStyles.text4, styles.categoryTitle]}>small plates</Text>
                <Text style={[defaultStyles.text7, styles.categoryDescription]}>These small plates are great</Text>
                <FlatList
                    data={smallPlates}
                    numColumns = {2}
                    columnWrapperStyle= {{justifyContent: "space-between"}}
                    keyExtractor = {(items) => items.id.toString()}
                    renderItem = {({item}) =>
                        < MenuCard
                            title= {item.name}
                            subtitle = {"$" + item.price}
                            image = {item.image}
                            onPress = {() => navigation.navigate("ItemDetails", item)}
                        />}
                    scrollEnabled='false'
                />
            </Card>
            
            <Card style={styles.categoryCard}
                onLayout={(event) => {setCurriesY(event.nativeEvent.layout.y);}}
            >
                <Text style={[defaultStyles.text4, styles.categoryTitle]}>curries</Text>
                <Text style={[defaultStyles.text7, styles.categoryDescription]}>These curries are great</Text>
                <FlatList
                    data={curries}
                    numColumns = {2}
                    columnWrapperStyle= {{justifyContent: "space-between"}}
                    keyExtractor = {(items) => items.id.toString()}
                    renderItem = {({item}) =>
                        < MenuCard
                            title= {item.name}
                            subtitle = {"$" + item.price}
                            image = {item.image}
                            onPress = {() => navigation.navigate("ItemDetails", item)}
                        />}
                    scrollEnabled='false'
                />
            </Card>
            
            <Card style={styles.categoryCard}
                onLayout={(event) => {setSidesY(event.nativeEvent.layout.y);}}
            >
                <Text style={[defaultStyles.text4, styles.categoryTitle]}>sides</Text>
                <Text style={[defaultStyles.text7, styles.categoryDescription]}>These sides are great</Text>
                <FlatList
                    data={sides}
                    numColumns = {2}
                    columnWrapperStyle= {{justifyContent: "space-between"}}
                    keyExtractor = {(items) => items.id.toString()}
                    renderItem = {({item}) =>
                        < MenuCard
                            title= {item.name}
                            subtitle = {"$" + item.price}
                            image = {item.image}
                            onPress = {() => navigation.navigate("ItemDetails", item)}
                        />}
                    scrollEnabled='false'
                />
            </Card>
            
            <Card style={styles.categoryCard}
                onLayout={(event) => {setDrinksY(event.nativeEvent.layout.y);}}
            >
                <Text style={[defaultStyles.text4, styles.categoryTitle]}>drinks</Text>
                <Text style={[defaultStyles.text7, styles.categoryDescription]}>These drinks are great</Text>
                <FlatList
                    data={drinks}
                    numColumns = {2}
                    columnWrapperStyle= {{justifyContent: "space-between"}}
                    keyExtractor = {(items) => items.id.toString()}
                    renderItem = {({item}) =>
                        < MenuCard
                            title= {item.name}
                            subtitle = {"$" + item.price}
                            image = {item.image}
                            onPress = {() => navigation.navigate("ItemDetails", item)}
                        />}
                    scrollEnabled='false'
                />
            </Card>
            
            <Card style={styles.categoryCard}
                onLayout={(event) => {setDessertsY(event.nativeEvent.layout.y);}}
            >
                <Text style={[defaultStyles.text4, styles.categoryTitle]}>desserts</Text>
                <Text style={[defaultStyles.text7, styles.categoryDescription]}>These desserts are great</Text>
                <FlatList
                    data={desserts}
                    numColumns = {2}
                    columnWrapperStyle= {{justifyContent: "space-between"}}
                    keyExtractor = {(items) => items.id.toString()}
                    renderItem = {({item}) =>
                        < MenuCard
                            title= {item.name}
                            subtitle = {"$" + item.price}
                            image = {item.image}
                            onPress = {() => navigation.navigate("ItemDetails", item)}
                        />}
                    scrollEnabled='false'
                />
            </Card>
        </ScrollView>
        </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: defaultStyles.colors.white,
        paddingBottom: 10,
        paddingTop: 6
    },
    categoryButton: {
        borderRadius: 100,
        paddingHorizontal: 12,
        paddingVertical: 6
    },
    categoryButtonText: {
        textTransform: 'capitalize'
    },
    categoryCard: {
        marginTop: 12,
        paddingBottom: 10
    },
    categoryDescription: {
        marginBottom: 10
    },
    categoryScrollContainer: {
        paddingHorizontal: width * 0.06
    },
    categoryTitle: {
        color: defaultStyles.colors.darkGray,
        fontWeight: '600',
        textTransform: 'capitalize'
    },
    titleBar: {
        borderBottomWidth: 0
    }
})

export default MenuScreen;