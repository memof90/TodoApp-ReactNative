//import liraries
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import CheckBox from '../constants/CheckBox/CheckboxButton';

// REDUX

// create a component
const Peding = () => {
    const [CompleteTask, setCompleteTask] = useState(false);

    useEffect(() => {
        console.log(CompleteTask);
    }, [CompleteTask]);

    return (
    <SafeAreaView style={tw.style(styles.container, 'p-2 ml-3')}>
            <Text style={styles.tittle}>Peding Tasks</Text>  
                <View style={tw `mt-9`}>
                        <CheckBox 
                            text= 'Desing Wiframes' 
                            selected={CompleteTask}
                            onPress={() => setCompleteTask(!CompleteTask)}
                        />
                </View>
    </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginTop: -30,
    },
    tittle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
});

//make this component available to the app
export default Peding;
