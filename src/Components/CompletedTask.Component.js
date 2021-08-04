//import liraries
// import React, {useState} from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import tw from 'tailwind-react-native-classnames';

// const [task, setTask] = useState([
//     {id: 1, task: 'add burrguer', complete: true},
//     {id: 2, task: 'create loading', complete: true},
//     {id: 3, task: 'add task runners', complete: true},
// ])

// const ListItem = ({todo}) => {
//     <View>
//         <Text>{todo?.task}</Text>
//     </View>
// }
// // create a component
// const CompletedTaks = () => {
//     return (
//         <SafeAreaView>
//         <Text>Completed Task</Text>
//         {/* <FlatList 
//             data={task}
//             renderItem={({item}) => <ListItem todo={item} />}
//         /> */}

//         </SafeAreaView>
//     );
// };

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#2c3e50',
//     },
// });

// //make this component available to the app
// export default CompletedTaks;
 //import liraries
 import React from 'react';
 import { View, Text, StyleSheet } from 'react-native';
 import { SafeAreaView } from 'react-native-safe-area-context';
 import tw from 'tailwind-react-native-classnames';
import CheckBox from '../constants/CheckBox/CheckboxButton';


 
 // create a component
 const Tasks = () => {
     return (
         <SafeAreaView style={tw.style(styles.container, 'p-2 ml-3')}>
             <Text style={styles.tittle}>Complete Tasks</Text>  
            <View style={tw `mt-9`}>
            <CheckBox 
                text= 'Desing Wiframes' 
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
 export default Tasks;
 