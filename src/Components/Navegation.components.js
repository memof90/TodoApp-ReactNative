//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// REACT NAVIGATION
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: "123",
        title: "To-Do App",
        screen: "HomeScreen"
    },
    {
        id: "456",
        title: "Add task",
        screen: "AddTask"
    }
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
               onPress={() => console.log("Pressed")}
               >
                <View>
                    <Text>Hello</Text>
                </View>
               </TouchableOpacity>
           )}
       />
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default NavOptions;
