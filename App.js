import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// REDUX
import { Provider } from 'react-redux';
import { ConfigureStore } from './src/Redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
