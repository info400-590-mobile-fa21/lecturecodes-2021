import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'; //import the default export in the module
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';


export default function App() {

  return(
    <View style={styles.container}>
      <TextInput
        style = {{borderColor:"black", borderBottomWidth:1}}
        placeholder="Name"
        // defaultValue={}
        // onChangeText={}
      />
      <Button
        color = "#2A3132"
        title = "save"
        // onPress = {}
      />
      <Button
        color = "#2A3132"
        title = "clear"
        // onPress = {}  
      />
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin:2
  },
});
