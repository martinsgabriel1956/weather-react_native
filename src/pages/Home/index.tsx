import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import { API_KEY } from "@env";
import { WeatherInfo } from "../../components/WeatherInfo";
import { UnitsPicker } from "../../components/UnitsPicker";

const baseURL = "https://api.openweathermap.org/data/2.5/weather";

export function Home() {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [currentWeather, setCurrentWeather] = useState<any>();
  const [unitsSystem, setUnitsSystem] = useState("metric");

  useEffect(() => {
    load();
  }, [unitsSystem]);

  async function load() {
    setCurrentWeather(null);
    setErrorMsg(null);
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

  return (
    <View style={styles.container}>
      {currentWeather && (
        <View style={styles.main}>
          <UnitsPicker
            unitsSystem={unitsSystem}
            setUnitsSystem={setUnitsSystem}
          />
          <WeatherInfo currentWeather={currentWeather} />
        </View>
      )}
      {errorMsg && <Text>{errorMsg}</Text>}
      {!currentWeather && !errorMsg && <ActivityIndicator />}
    </View>
  );
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
