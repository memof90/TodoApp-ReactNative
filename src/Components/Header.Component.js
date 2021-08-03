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
        <View style={styles.header}>
        <Text style={tw.style({fontSize: 30}, 'mb-2')}>To-Do App</Text>
        <FlatList 
            style={styles.FlatList}
            data={headerButton}
            horizontal
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            renderItem ={({item}) => (
                <TouchableOpacity
                onPress={() => console.log('button Pressed')}
                >
                <View>
                    <Icon 
                        style={tw `p-2`}
                        size={25}
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
        </View>
      
        
    );
};

// define your styles
const styles = StyleSheet.create({
    header: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    FlatList: {
        paddingHorizontal: 70,
     }
});

//make this component available to the app
export default Header;



