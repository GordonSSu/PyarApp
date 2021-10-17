import firebase from '../config/firebase';
import 'firebase/firestore';
import React, { Component } from 'react';
import MenuCard from '../components/MenuCard';
import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';

class DataBaseScreen extends Component {
    constructor() {
        super();
        this.firestoreRef = firebase.firestore().collection('Restaurants')
        .doc('PyarRestaurant')
        .collection("Menu")
        .doc("AllDayMenu")
        .collection("Test");

        this.state = {
          isLoading: true,
          curryArr: []
        };
      }
    
      componentDidMount() {
        this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
      }
    
      componentWillUnmount(){
        this.unsubscribe();
      }
    
      getCollection = (querySnapshot) => {
        const curryArr = [];
        querySnapshot.forEach((res) => {
          const { name, description, price, image } = res.data();
          curryArr.push({
            key: res.id,
            res,
            name,
            description,
            price,
            image
          });
        });
        this.setState({
          curryArr,
          isLoading: false,
       });
      }

      render() {
        if(this.state.isLoading){
          return(
            <Text>
              Loading
            </Text>
          )
        }    
        return (
          <ScrollView style={styles.container}>
              {/* {
                this.state.curryArr.map((item, i) => {
                  return (
                    <ListItem
                      key={i}
                      chevron
                      bottomDivider
                      title={item.name}
                      subtitle={item.price}
                      />
                  );
                })
              } */}
              <FlatList
                    data={this.state.curryArr}
                    numColumns = {2}
                    columnWrapperStyle= {{justifyContent: "space-between"}}
                    keyExtractor = {(items) => items.key.toString()}
                    renderItem = {({item}) =>
                        < MenuCard
                            title= {item.name}
                            subtitle = {"$" + item.price}
                            image = {item.image}
                        />}
                    scrollEnabled='false'
                />
          </ScrollView>
        );
      }
    }

    const styles = StyleSheet.create({
        container: {
         flex: 1,
         paddingBottom: 22
        },
        preloader: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center'
        }
      })

export default DataBaseScreen;