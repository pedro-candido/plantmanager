import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

<<<<<<< HEAD
import Home from './src/Pages/Home'

export default function App() {
  return (
    <View>
      <Home/>
    </View>
  );
}
=======
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
>>>>>>> 00d7cfd5aaf2787b9ee3884404dfbac41c0517e5
