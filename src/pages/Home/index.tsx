import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import { FontAwesome } from '@expo/vector-icons';

import { API_KEY } from "@env";

import { WeatherInfo } from "../../components/WeatherInfo";
import { UnitsPicker } from "../../components/UnitsPicker";
import { ReloadIcon } from "../../components/ReloadIcon";
import { WeatherDetails } from "../../components/WeatherDetails";

import { colors } from "../../utils";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

const baseURL = "https://api.openweathermap.org/data/2.5/weather";

type RouteProps = {
  navigation?: NavigationProp<ParamListBase>;
}

export function Home({navigation}: RouteProps) {
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
        <>
          <View style={styles.main}>
            <UnitsPicker
              unitsSystem={unitsSystem}
              setUnitsSystem={setUnitsSystem}
            />
            <ReloadIcon load={load} />
            <WeatherInfo currentWeather={currentWeather} />
          </View>
          <RectButton style={styles.searchIconContainer} onPress={() => navigation?.navigate('Search')} >
            <FontAwesome name="search" size={28} color="#FFF" />
          </RectButton>
          <WeatherDetails currentWeather={currentWeather} unitsSystem={unitsSystem} />
        </>
      )}
      {errorMsg && <Text>{errorMsg}</Text>}
      {!currentWeather && !errorMsg && <ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />}
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
  searchIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: colors.PRIMARY_COLOR,
    bottom: 30,
    justifyContent: "center",
    alignItems: "center",
    left: 325
  }

});
