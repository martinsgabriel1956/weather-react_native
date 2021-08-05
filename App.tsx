import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [errorMsg, setErrorMsg] = useState<string | null>();

  useEffect(() => {
    load()
  }, [])

  async function load() {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') setErrorMsg('Access to location is needed to run the app!')

      const location = await Location.getCurrentPositionAsync();

      const {latitude, longitude} = location.coords;

      alert(`Latitude: ${latitude}, Longitude: ${longitude}`)
    } catch (e) {

    }
  }
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
