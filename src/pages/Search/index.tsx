import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import { colors } from "../../utils";
import { PreviousSearch } from "../../components/PreviousSearch";
const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;

import { GEO_API_KEY } from "@env";

const baseURL = `https://api.opencagedata.com/geocode/v1/json`;

export function Search() {
  const [location, setLocation] = useState<string>();
  const [stateInfo, setStateInfo] = useState<any>();

  async function handleSearch() {
    try {
      let res = await fetch(`${baseURL}?q=${location}&key=${GEO_API_KEY}`);
      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setStateInfo(data);
      }
    } catch (e) {
      return "Não carregou nada";
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Type your location here:</Text>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
      />
      <View style={styles.buttonContainer}>
        <RectButton style={styles.button} onPress={handleSearch}>
          <Text style={{ ...styles.textButton, fontWeight: "700" }}>
            Submit
          </Text>
        </RectButton>
        <RectButton style={styles.button}>
          <MaterialCommunityIcons
            name="crosshairs-gps"
            size={22}
            style={styles.textButton}
          />
        </RectButton>
      </View>
      <View>
        <Text style={styles.textPreviousSearch}>Previous Searches</Text>
        {stateInfo && <PreviousSearch data={stateInfo} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    marginTop: 60,
  },
  title: {
    textAlign: "left",
    fontSize: 18,
    color: "#000",
    marginBottom: 20,
    marginLeft: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DBDBDB",
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    height: 40,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    width: 118,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  textButton: {
    textAlign: "center",
    color: "#FFF",
  },
  textPreviousSearch: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 16,
  },
});
