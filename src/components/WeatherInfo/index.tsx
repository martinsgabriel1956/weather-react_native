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
        <Text style={styles.textPrimary}>{temp}&#176;</Text>
        <Text style={styles.weatherDescription}>{description}</Text>
        <Text style={styles.textSecondary}>{main}</Text>
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
  },
  textPrimary: {
    color: PRIMARY_COLOR,
    fontSize: 40
  },
  textSecondary: {
    color: SECONDARY_COLOR,
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10
  }
});
