//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
// REACT NATIVE ELEMENTS ICON
import { Icon, Badge } from 'react-native-elements';

const headerButton = [
    {
        id: "123",
        icon: "search",
        type: "Octicons",
        status: ""
    },
    {
        id: "345",
        icon: "notifications-none",
        type: "MaterialIcons",
        status: "success"
    },
    {
        id: "678",
        icon: "menu",
        type: "SimpleLineIcons",
        status: ""
    },
    
]

// create a component
const Header = () => {
    return (
        <>
        <Text style={styles.title}>To-Do App</Text>
        <FlatList 
            style={styles.FlatList}
            data={headerButton}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem ={({item}) => (
                <TouchableOpacity
                onPress={() => console.log('button Pressed')}
                >
                <View>
                    <Icon 
                        style={tw `p-2`}
                        name={item.icon}
                        color="#868686" 
                        type={item.type}
                    />
                <Badge
                status={item.status}
                containerStyle={{top: -29, left:5 }}
                />
                </View>
                </TouchableOpacity>
            )}
        />
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    title: {
        fontSize: 30,
    },
    FlatList: {
        paddingHorizontal: 220,
        marginTop: -35  
     }
});

//make this component available to the app
export default Header;



