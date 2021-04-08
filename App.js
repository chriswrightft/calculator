import { DangerZone } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalcBtn from './components/CalcBtn';

export default function App() {

  // Create necessariable variables using react hooks.
  const [numberOne, setNumberOne] = useState('');
  const [numberTwo, setNumberTwo] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState(0);

  // This function sets the numbers based on if the operator has a value or not.
  // i.e. once you choose an operator number two starts to be populated.
  const setNumber = (clickedNum) => {
    if (operation == '') {
      setNumberOne(numberOne + clickedNum);
      setTempOutput(numberOne + clickedNum);
    } else {
      setResult('');
      setNumberTwo(numberTwo + clickedNum);
      setTempOutput(numberTwo + clickedNum);
    }
  };

  // This just temporarly sets the output as you are
  // entering the number for number one or number two.
  const setTempOutput = (newResult) => {
    setResult(newResult);
  }

  // This sets the operator
  // It also sets number one to be the result - this occurs after you have pressed = to get a result,
  // if you do not reset number two and set number one to be the result you can press an operator straight after =
  // and you will be back with the origional number one and appending to the number two. (hard to explain but it resolves a bug)
  const setOperationFunc = (char) => {
    setOperation(char);
    setNumberOne(result);
    setNumberTwo('');
  }

  // simple switch to do the actual maths of the calculator.
  // Unless numberOne and numberTwo do not have values otherwise you end up with NaN
  const outputResult = () => {
    if (numberOne === '' || numberTwo === '') return;
    let output = '';
    switch (operation) {
      case '+':
        output = parseInt(numberOne, 10) + parseInt(numberTwo, 10);
        setResult(output);
        break;
      case '-':
        output = parseInt(numberOne, 10) - parseInt(numberTwo, 10);
        setResult(output);
        break;
      case '*':
        output = parseInt(numberOne, 10) * parseInt(numberTwo, 10);
        setResult(output);
        break;
      case '/':
        output = parseInt(numberOne, 10) / parseInt(numberTwo, 10);
        setResult(output);
        break;
      default:
        break;
    }
  }

  // Using the ac button to reset everything.
  const resetAll = () => {
    setNumberOne('');
    setNumberTwo('');
    setOperation('');
    setResult(0);
  }

  return (
    <View style={styles.container}>
      <View style={styles.outputRow}>
        <Text onPress={() => console.log('bob')} style={styles.output}>{result}</Text>
      </View>
      <View style={styles.row}>
        <CalcBtn char="1" setNumber={setNumber} btnColor="lightgray" />
        <CalcBtn char="2" setNumber={setNumber} btnColor="lightgray" />
        <CalcBtn char="3" setNumber={setNumber} btnColor="lightgray" />
        <CalcBtn char="+" setNumber={setOperationFunc} btnColor="orange" />
      </View>
      <View style={styles.row}>
        <CalcBtn char="4" setNumber={setNumber} btnColor="lightgray" />
        <CalcBtn char="5" setNumber={setNumber} btnColor="lightgray" />
        <CalcBtn char="6" setNumber={setNumber} btnColor="lightgray" />
        <CalcBtn char="-" setNumber={setOperationFunc} btnColor="orange" />
      </View>
      <View style={styles.row}>
        <CalcBtn char="7" setNumber={setNumber} btnColor="lightgray" />
        <CalcBtn char="8" setNumber={setNumber} btnColor="lightgray" />
        <CalcBtn char="9" setNumber={setNumber} btnColor="lightgray" />
        <CalcBtn char="*" setNumber={setOperationFunc} btnColor="orange" />
      </View>
      <View style={styles.row}>
        <CalcBtn char="ac" setNumber={resetAll} btnColor="gray" />
        <CalcBtn char="0" setNumber={setNumber} btnColor="lightgray" />
        <CalcBtn char="=" setNumber={outputResult} btnColor="gray" />
        <CalcBtn char="/" setNumber={setOperationFunc} btnColor="orange" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
  },
  outputRow: {
    textAlign: 'right',
    width: 300,
  },
  output: {
    fontSize: 72,
    textAlign: 'right',
  },
});
