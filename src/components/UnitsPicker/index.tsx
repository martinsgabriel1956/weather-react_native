import React, { Dispatch, SetStateAction } from 'react'
import { Picker } from '@react-native-picker/picker';
import { View, StyleSheet, Platform } from 'react-native';

type UnitSystemProps = {
  unitsSystem: string;
  setUnitsSystem: Dispatch<SetStateAction<string>>
}

export function UnitsPicker({ unitsSystem, setUnitsSystem }: UnitSystemProps) {
  return (
    <View style={styles.unitsSystem}>
      <Picker selectedValue={unitsSystem} onValueChange={item => setUnitsSystem(item) } mode={'dropdown'} itemStyle={{
        fontSize: Platform.OS === 'ios' ? 12 : 16,
      }}>
        <Picker.Item label='C&#176;' value="metric" />
        <Picker.Item label='F&#176;' value="imperial" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  unitsSystem: {
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: -20,
      },
      android: {
        top: 70,
      }
    }),
    left: 20,
    width: 100,
    height: 50,
  }
})

