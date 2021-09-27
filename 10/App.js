import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import sunset from './assets/sunset.jpg'

export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Hellow World</Text>
      <Image 
        source={sunset} 
        style={styles.image}
        resizeMode="repeat"
        />
        <Text style={styles.text}>Sunset</Text>
      <Image
        source= {{uri: 'https://placekitten.com/g/200/300'}}
        style= {styles.image}
      />
      <Text style={styles.text}>Kitties</Text>
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
  },text:{
    color: 'red'
  }, image:{
    width: 200,
    height: 200
  }
});
