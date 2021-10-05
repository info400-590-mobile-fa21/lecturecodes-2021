import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
import cloudy from './assets/cloudy.png';
import { FontAwesome5 } from '@expo/vector-icons'; 


export default function App() {
  return (
    <View style={styles.container}>
      <CityPanel city="Bloomington" weather={cloudy} temp={70}/>
      <CityPanel city="Tokyo" weather={cloudy} temp={70}/>
      <StatusBar style="auto" />
    </View>
  );
}

function CityPanel(props){

  return(
    <View style={styles.cityPanel}>
        <Caption city={props.city}/>
        <WeatherIcon weather={props.weather} />
        <Temperature temp={props.temp}/>
        <DeleteButton onClick={props.onClick} id={props.id}/>
    </View>
    )
}

function Temperature(props){
  return(
    <Text style={styles.text}>{props.temp}F</Text>
    )
}

function Caption(props){
  return(
    <View>
      <Text style={styles.text}>{props.city}</Text>
    </View>
  )
}

function WeatherIcon(props){
  return(
    <Image source={props.weather} style={styles.photo}/>
    )
}

function DeleteButton(props){
  return(
    <TouchableOpacity>
      <FontAwesome5 name="minus-square" size={24} color="grey" />
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },cityPanel:{
    borderWidth:1,
    borderRadius: 2,
    borderColor: "grey",
    width:"80%",
    flexDirection:"row",
    justifyContent: "space-between",
    alignItem: "center",
    padding: 5,
    margin: 3
  }, photo:{
    width: 20,
    height: 20
  }, text:{
    marginTop:2,
    color: "grey"
  }

});
