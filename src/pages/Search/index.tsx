import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { colors } from "../../utils";
const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;

export function Search() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Type your location here:</Text>
      <TextInput style={styles.input} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={{...styles.textButton, fontWeight: '700'}}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons name="crosshairs-gps" size={22} style={styles.textButton} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textPreviousSearch}>
          Previous Searches
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  title: {
    textAlign: 'left',
    fontSize: 18,
    color: '#000',
    marginBottom: 20,
    marginLeft: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#DBDBDB',
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    height: 40,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    width: 118,
    borderRadius: 6,
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  textButton: {
    textAlign: 'center',
    color: '#FFF'
  },
  textPreviousSearch: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 16,
  },
});


