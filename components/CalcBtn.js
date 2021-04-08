import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CalcBtn = ({ char, setNumber, btnColor }) => {
  return (
    <TouchableOpacity onPress={() => setNumber(char)}>
      <View style={[styles.col, { backgroundColor: `${btnColor}` }]} >
        <Text style={styles.btn}>{char}</Text>
      </View>
    </TouchableOpacity>
  )
};

export default CalcBtn;

const styles = StyleSheet.create({
  col: {
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderStyle: 'solid',
    borderRadius: 50,
    margin: 5,
  },
  btn: {
    width: 30,
    fontSize: 24,
    textAlign: 'center',
  },
});