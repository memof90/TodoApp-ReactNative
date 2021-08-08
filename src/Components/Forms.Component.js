//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
// import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

// DROPDownPicker
import DropDownPicker from 'react-native-dropdown-picker';

import DateTimePicker from '@react-native-community/datetimepicker';
import { Icon } from 'react-native-elements';



// create a component
const FormTask = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('06:00');
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [openRemind, setRemindOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [valueRemind, setValueRemind] = useState(null);
  const [items, setItems] = useState([
    {label: 'Daily', value: 'Daily'},
    {label: 'Weekly', value: 'Weekly'},
    {label: 'Monthly', value: 'Monthly'},
    {label: 'Quarterly', value: 'Quarterly'}
  ]);
  const [reminditems, setRemindiItems] = useState([
    {label: '5 minutes early', value: '5m'},
    {label: '10 minutes early', value: '10m'},
    {label: '15 minutes early', value: '15m'},
    {label: '20 minutes early', value: '20m'}
  ]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    
  };


  // const showTimepicker = () => {
  //   showMode('time');
  // };

  const navigation = useNavigation();

    return (
        <>
            <View style={styles.formRow}>
            <Text style={styles.formLabel}>Title</Text>
            </View>
            <View style={styles.formItem}>
            <TextInput 
            style={tw `pl-3 pt-3 pb-3 bg-gray-200 rounded ml-4 h-12 w-80`}
              placeholder= "Desing Team Meeting"
              value={taskTitle}
              onChangeText={setTaskTitle}
            />
            </View>
            <View style={styles.formRow}>
            <Text style={styles.formLabel}>Deadline</Text>
            </View>
            <View style={styles.formItem}>
            <TextInput 
              style={tw `pl-3 pt-3 pb-3 bg-gray-200 rounded ml-4 h-12 w-80`}
              placeholder= "2021-02-28"
            />
            <TouchableOpacity
            style={{position: 'absolute', marginLeft: 300}}
            onPress={showDatepicker}
            >
             <View>
                <Icon 
                  type="MaterialIcons"
                  name="keyboard-arrow-down"
                />
             </View>
            </TouchableOpacity>
            {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          style={tw.style({width: 320, backgroundColor: "#E5E7EB", position: 'absolute', marginLeft:16})} 
        />
          )}
            </View>
            <View style={styles.formRowTwo}>
            <Text style={styles.formLabel}>Start Time</Text>
            <Text style={tw.style(styles.formLabel, 'ml-2')}>End Time</Text>
            </View>
            <View style={styles.formRowTwo}>
            <TextInput 
            value={time}
            onChangeText={setTime}
            style={tw.style('pl-2 pb-3 pt-3 bg-gray-200 ml-4 h-12 rounded w-36',{marginTop: -20})}
            placeholder= "11:00 Am"
            />
            <TextInput 
            style={tw.style('pl-3 pb-3 pt-3 bg-gray-200 rounded h-12 w-36',{marginTop: -20, marginRight: 20})}
              placeholder= "14:00 Pm"
            />
            </View>
            <View style={styles.formRowTwo}>
            <Text style={styles.formLabel}>Remind</Text>
            </View>
            <View style={styles.formItem}>
            {/* <TextInput 
            style={tw `pl-3 pt-3 pb-3 bg-gray-200 rounded ml-4 h-12 w-80`}
              placeholder= "10 minutes early"
            /> */}
            <DropDownPicker
              style={tw.style('bg-gray-200 rounded ml-4 w-80', {borderWidth: 0})}
              labelStyle={{
              color: "#868686" 
              }}
              dropDownDirection="TOP"
              containerStyle={tw `w-80`}
              placeholder="10 minutes early"
              placeholderStyle={{
                color: "#868686",
                opacity: 0.5
              }}
              dropDownContainerStyle={{borderWidth: 0, backgroundColor: "#E5E7EB" }}
              open={openRemind}
              value={valueRemind}
              items={reminditems}
              setOpen={setRemindOpen}
              setValue={setValueRemind}
              setItems={setRemindiItems}
            />
            </View>
            <View style={styles.formRowTwo}>
            <Text style={styles.formLabel}>Repeat</Text>
            </View>
            <View style={styles.formItem}>
            {/* <TextInput 
            style={tw `pl-3 pb-5 pt-4 bg-gray-200 rounded ml-4 w-80`}
              placeholder= "10 minutes early"
            /> */}
            <DropDownPicker
              style={tw.style('bg-gray-200 rounded ml-4 w-80', {borderWidth: 0})}
              labelStyle={{
              color: "#868686" 
              }}
              containerStyle={tw `w-80`}
              placeholder="Weekly"
              placeholderStyle={{
                color: "#868686",
                opacity: 0.5
              }}
              dropDownContainerStyle={{borderWidth: 0, backgroundColor: "#E5E7EB" }}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
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
        </>
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
        marginLeft: 10
    },
    formItem: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        flexDirection: 'row',
        marginLeft: 15,
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
