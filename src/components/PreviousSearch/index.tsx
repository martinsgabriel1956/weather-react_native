import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { RectButton } from 'react-native-gesture-handler';

import { colors } from "../../utils";
const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;

export function PreviousSearch({ data }: any) {
  const { results: [
    {
      components: {
        state, 
        state_code,
        country
      }
    }
  ]} = data;

  return (
    <View style={styles.container}>
      <View style={styles.stateContainer}>
        <Text style={styles.state}>{state}</Text>
        <Text style={styles.stateInfo}>{state_code}, {country}  </Text>
      </View>
      <RectButton>
        <AntDesign name="arrowright" size={32} color={PRIMARY_COLOR} />
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DBDBDB",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 24,
    paddingLeft: 12,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  state: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#000",
  },
  stateContainer: {
    paddingLeft: 10,
    borderLeftWidth: 3,
    borderColor: PRIMARY_COLOR,
  },
  stateInfo: {
    fontSize: 16,
    color: "#000",
  },
});
