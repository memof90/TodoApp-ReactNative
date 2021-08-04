//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
// REACT NAVIGATION
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id: "123",
        title: "Add task",
        screen: "AddTask"
    },
    // {
    //     id: "456",
    //     title: "To-Do App",
    //     screen: "HomeScreen"
    // }
]

// create a component
const NavOptions = () => {

    const navigation = useNavigation();

    return (
       <FlatList 
           data={data}
           horizontal
           keyExtractor={(item) => item.id}
           renderItem={({item}) => (
               <TouchableOpacity
               style={tw.style('pb-5 pt-4 m-2 w-80 rounded-full', styles.touchableOpacity )}
               onPress={() => navigation.navigate(item.screen)}
               >
                <View>
                  <Text style={styles.btnText}> Create a Task </Text>
                </View>
               </TouchableOpacity>
           )}
       />
    );
};

// define your styles
const styles = StyleSheet.create({
    touchableOpacity: {
        backgroundColor: '#23C774',
        marginTop: 260,
        marginLeft: 30
    },
    btnText: {
        textAlign: 'center',
        color: '#fff'
    }

});

//make this component available to the app
export default NavOptions;
