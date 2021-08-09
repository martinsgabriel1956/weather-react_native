import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../../utils";
const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;

export function WeatherDetails({ currentWeather, unitsSystem }: any) {
  const {
    main: { feels_like, humidity, pressure },
    wind: { speed }
  } = currentWeather;

  const windSpeed = unitsSystem === 'metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} miles/h`

  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderColor: BORDER_COLOR,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <FontAwesome5
              name="temperature-low"
              size={25}
              color={PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItens}>
              <Text>Feels like: </Text>
              <Text style={styles.textSecondary}>{feels_like} &#176;</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
          <MaterialCommunityIcons
              name="water"
              size={30}
              color={PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItens}>
              <Text>Humidity: </Text>
              <Text style={styles.textSecondary}>{humidity} %</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{...styles.weatherDetailsRow, borderTopWidth: 1, borderColor: BORDER_COLOR}}>
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderColor: BORDER_COLOR,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name="weather-windy"
              size={30}
              color={PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItens}>
              <Text>Wind Speed: </Text>
              <Text style={styles.textSecondary}>{windSpeed}</Text>
            </View>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
          <MaterialCommunityIcons
              name="speedometer"
              size={30}
              color={PRIMARY_COLOR}
            />
            <View style={styles.weatherDetailsItens}>
              <Text>Pressure: </Text>
              <Text style={styles.textSecondary}>{pressure} hPa</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherDetails: {
    marginTop: "auto",
    margin: 15,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 10,
  },

  weatherDetailsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  weatherDetailsBox: {
    flex: 1,
    padding: 20,
  },
  weatherDetailsItens: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  textSecondary: {
    fontSize: 15,
    color: SECONDARY_COLOR,
    fontWeight: '700',
    margin: 7,
  }
});
