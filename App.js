import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// REDUX
import { Provider } from 'react-redux';
import { ConfigureStore } from './src/Redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

// REACT NAVEGATION
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Safearea React Native Elements
import { SafeAreaProvider } from 'react-native-safe-area-context';

//SCREENS
import HomeScreen from './src/Screens/HomeScreen';
import AddTask from './src/Screens/AddTaskScreen';


const { store, persistor } = ConfigureStore();

export default function App() {
  // CREATE STACKNAVEGATIOR()
  const Stack = createStackNavigator();
  
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <NavigationContainer>
    <SafeAreaProvider>
      <Stack.Navigator>
        <Stack.Screen 
          name='HomeScreen'
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='AddTask'
          component={AddTask}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
    </NavigationContainer>
    </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
