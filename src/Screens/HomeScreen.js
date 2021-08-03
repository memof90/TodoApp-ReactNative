//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import Header from '../Components/Header';
// create a component
const HomeScreen = () => {
    return (
        <SafeAreaView style={tw `bg-white h-full`}>
            <View style={tw `p-5`}>
                <Header />
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

//make this component available to the app
export default HomeScreen;
