import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { colors } from "../../utils";
const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;

export function PreviousSearch() {
  return (
    <View style={styles.container}>
      <View style={styles.stateContainer}>
        <Text style={styles.state}>Rio de Janeiro</Text>
        <Text style={styles.stateInfo}>RJ, Brazil</Text>
      </View>
      <TouchableOpacity>
        <AntDesign name="arrowright" size={32} color={PRIMARY_COLOR} />
      </TouchableOpacity>
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
