import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import { API_KEY } from "@env";
import { WeatherInfo } from "../../components/WeatherInfo";

const baseURL = "https://api.openweathermap.org/data/2.5/weather";

export function Home() {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [currentWeather, setCurrentWeather] = useState<any>();
  const [unitsSystem, setUnitsSystem] = useState("metric");

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted")
        setErrorMsg("Access to location is needed to run the app!");

      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      const url = `${baseURL}?lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${API_KEY}`;

      const res = await fetch(url);
      const result = await res.json();

      if (res.ok) {
        setCurrentWeather(result);
      } else {
        setErrorMsg(result.message);
      }
    } catch (e) {}
  }

  if (currentWeather) {
    const {
      main: { temp },
    } = currentWeather;

    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <WeatherInfo currentWeather={currentWeather} />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>{errorMsg}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  main: {
    flex: 1,
    justifyContent: "center",
  },
});
