//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet,ScrollView,TextInput, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
// import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
// create a component
const FormTask = () => {
  const navigation = useNavigation();
  // const [date, setDate] = useState(new Date(1598051730000));
  // const [mode, setMode] = useState('date');
  // const [show, setShow] = useState(false);

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === 'ios');
  //   setDate(currentDate);
  // };

  // const showMode = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  // const showDatepicker = () => {
  //   showMode('date');
  // };


    return (
        <ScrollView>
            <View style={styles.formRow}>
            <Text style={styles.formLabel}>Title</Text>
            </View>
            <View style={styles.formItem}>
            <TextInput 
            style={tw `pl-3 pb-5 pt-4 bg-gray-200 rounded m-2 w-80`}
              placeholder= "Desing Team Meeting"
            />
            </View>
            <View style={styles.formRow}>
            <Text style={styles.formLabel}>Deadline</Text>
            </View>
            <View style={styles.formItem}>
            <TextInput 
            style={tw `pl-3 pb-5 pt-4 bg-gray-200 rounded m-2 w-80`}
              placeholder= "2021-02-28"
            />
            {/* <TouchableOpacity
           
            onPress={() => showDatepicker()}
            >
            </TouchableOpacity>
            {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          // style={{width: 320, backgroundColor: "gray"}} 
          style={tw `pl-3 pb-10 pt-4 bg-gray-200 rounded m-2 w-80`}
        />
          )} */}
            </View>
            <View style={styles.formRowTwo}>
            <Text style={styles.formLabel}>Start Time</Text>
            <Text style={tw.style(styles.formLabel, 'ml-2')}>End Time</Text>
            </View>
            <View style={styles.formRowTwo}>
            <TextInput 
            style={tw.style('pl-2 pb-5 pt-4 bg-gray-200 rounded w-36',{marginTop: -20})}
              placeholder= "11:00 Am"
            />
            <TextInput 
            style={tw.style('pl-3 pb-5 pt-4 bg-gray-200 rounded m-2 w-36',{marginTop: -20, marginRight: 30})}
              placeholder= "14:00 Pm"
            />
            </View>
            <View style={styles.formRowTwo}>
            <Text style={styles.formLabel}>Remind</Text>
            </View>
            <View style={styles.formItem}>
            <TextInput 
            style={tw `pl-3 pb-5 pt-4 bg-gray-200 rounded m-2 w-80`}
              placeholder= "10 minutes early"
            />
            </View>
            <View style={styles.formRowTwo}>
            <Text style={styles.formLabel}>Repeat</Text>
            </View>
            <View style={styles.formItem}>
            <TextInput 
            style={tw `pl-3 pb-5 pt-4 bg-gray-200 rounded m-2 w-80`}
              placeholder= "10 minutes early"
            />
            </View>
            <TouchableOpacity
               style={tw.style('pb-5 pt-4 m-2 w-80 rounded-full', styles.touchableOpacity )}
               onPress={() => navigation.goBack()}
               >
                <View>
                  <Text style={styles.btnText}> Create a Task </Text>
                </View>
               </TouchableOpacity>
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20,
        marginBottom: 20,
    },
    formLabel: {
        fontSize: 18,
        flex: 2,
        fontWeight: 'bold',
    },
    formItem: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: -20
    },
    formRowTwo: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        margin: 20, 
        marginTop: 5
    },
    touchableOpacity: {
        backgroundColor: '#23C774',
        marginTop: 80,
        marginLeft: 30
    },
    btnText: {
        textAlign: 'center',
        color: '#fff'
    }
});

//make this component available to the app
export default FormTask;
