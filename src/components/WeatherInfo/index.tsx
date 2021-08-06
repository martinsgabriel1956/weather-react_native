import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "../../utils";

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;

export function WeatherInfo({ currentWeather }: any) {
  const {
    main: { temp },
    weather: [details],
    name,
  }: any = currentWeather;

  const { icon, main, description } = details;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <>
      <View style={styles.weatherInfo}>
        <Text>{name}</Text>
        <Image source={{ uri: iconUrl }} style={styles.weatherIcon} />
        <Text>{temp}</Text>
        <Text style={styles.weatherDescription}>{description}</Text>
        <Text>{main}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: "center",
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  weatherDescription: {
    textTransform: "capitalize",
  }
});
