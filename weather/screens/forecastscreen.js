import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList, KeyboardAvoidingView} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import {styles} from '../utilities/style.js'
import * as MyComponent from '../components/component.js'
import {getForWeather} from '../utilities/api.js'

// const API_KEY = "01db2ead9a994354bfbb6adaff45411c"

export function ForecastWeather(props){

  const [forPanels, setForPanels] = useState([]);
  const [city, setCity] = useState("");

  // const getForWeather = async(cityname)=>{
  //   const response = await fetch("https://api.weatherbit.io/v2.0/forecast/daily?units=i&city=" + cityname + "&key=" + API_KEY);
  //   const result = await response.json();

  //   console.log(result)
  //   return result
  // }

  const addPanel = (newCity)=>{

    getForWeather(newCity).then(result=>{
      let newPanels = []
    
      for (var i=0; i< result.data.length; i++){
        newPanels.push({
          date:result.data[i].datetime,
          weather: "https://www.weatherbit.io/static/img/icons/" + result.data[i].weather.icon + ".png",
          temp:result.data[i].temp,
          id: Math.floor(Math.random() * 1000),
        })
      }
      setForPanels(newPanels)
      setCity(newCity)
    })
  }

  return(
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.innerView}>
          <MyComponent.AddPanel onClick={addPanel}/>
          <Text>{city}</Text>
          <FlatList
            data={forPanels}
            renderItem={({item}) => <ForecastPanel {...item} />}
            keyExtractor={item => item.id}
          />
        </KeyboardAvoidingView>
    </View>
    )
}

function ForecastPanel(props){
  return(
    <View style={styles.cityPanel}>
      <MyComponent.Caption city={props.date}/>
      <MyComponent.WeatherIcon weather={props.weather} />
      <MyComponent.Temperature temp={props.temp}/>
    </View>
    )
}



// function Temperature(props){
//   return(
//     <Text>{props.temp}F</Text>
//     )
// }

// function Caption(props){
//   return(
//     <Text>{props.city}</Text>
//   )
// }

// function WeatherIcon(props){
//   return(
//     <Image source={{uri:props.weather}} style={styles.icon}/>
//     )
// }

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     width:"100%",
//     height:"100%",
//     backgroundColor: '#EAEAEA',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     paddingTop: 40
//   },icon:{
//     width:20,
//     height:20
//   },addPanel:{
//     flexDirection: 'row', 
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },button: {
//     alignItems: "center",
//     backgroundColor: "#EAEAEA",
//   },input: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 2,
//     padding: 3,
//     margin: 5,
//   },cityPanel:{
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 4,
//     padding: 3,
//     margin: 5,
//     flexDirection: 'row', 
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   }, innerView:{
//     width:"70%"
//   }
// });