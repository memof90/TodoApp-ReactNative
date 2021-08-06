//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import { Icon} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import FormTask from '../Components/Forms.Component';


// create a component
const AddTask = () => {

   const navigation = useNavigation();

    return (
        <SafeAreaView style={{backgroundColor: 'white'}}>
            <View style={styles.container}>
            <TouchableOpacity
                onPress={()=> navigation.navigate('HomeScreen')}
            >
            <Icon 
                name="chevron-left"
                type="EvilIcons"
                color="#868686" 
            />
            </TouchableOpacity>
            <Text style={tw.style('ml-5', styles.addTaskText)}>Add task</Text>
            </View>
            <FormTask />
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
    },
    addTaskText: {
        fontSize: 30
    }
});

//make this component available to the app
export default AddTask;
