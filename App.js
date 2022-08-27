import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default function App() {

  const [number, setNumber]=useState((Math.floor(Math.random() * 100) + 1))

  const[guess, setGuess]=useState('')

  const[result, setResult]=useState('')

  const[tries, setTries]=useState(1)

  const checkGuess = () => {
    setTries(tries+1) 
    if(guess==number){
      Alert.alert('You guessed the number in ' + tries + " guesses!")
      setNumber((Math.floor(Math.random() * 10) + 1))
      setTries(1)
      setResult('')
    } else if (guess>number) {
      setResult("Your answer " + guess +" is higher than the number")
    } else if (guess<number) {
      setResult("Your answer "+ guess +" is lower than the number")
    } else{
      setResult("Please use a number from 1-100")
    }
    
 }

  return (
    <View style={styles.container}>

      <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <Text>Guess a number between 1-100</Text>
        <TextInput style={styles.input} keyboardType='number-pad' onChangeText={guess=>setGuess(parseInt(guess))} value={guess}/>
        <Text>{result}</Text>
      </View>

      <View style={{flex:1, flexDirection: 'row', alignItems:'center', justifyContent:'space-around', marginTop:'-50%'}}>
      <Button onPress={checkGuess} title='Make a guess'/>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    width:200,
    borderColor:'gray',
    borderWidth:1
  }
});
