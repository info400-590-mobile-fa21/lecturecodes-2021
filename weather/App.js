import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList, KeyboardAvoidingView} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
// import { Octicons } from '@expo/vector-icons'; 
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'; 
import {CurrentWeather} from './screens/currentweather.js'
import {ForecastWeather} from './screens/forecastscreen.js'

const API_KEY = "01db2ead9a994354bfbb6adaff45411c"

export default function App(){

  const Tap = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tap.Navigator initialRouteName="First">
        <Tap.Screen
          name="Current"
          component={CurrentWeather}
          options={{
              title: "Current Weather",
              tabBarIcon:({color})=>(<MaterialIcons name="today" size={32} color="black" />)
            }}
        />
        <Tap.Screen
          name="Forecast"
          component={ForecastWeather}
          options={{
              tabBarIcon:({color})=>(<MaterialCommunityIcons name="calendar-question" size={32} color="black" />)
            }}
        />
      </Tap.Navigator>
    </NavigationContainer>
  )
}

/* Component for the Current Weather screen */


/* Component for the Forecast screen */


// function AddPanel(props){

//   const [cityname, setCityname] = useState("")

//   let getText = (text)=>{
//     setCityname(text)
//   }

//   return(
//     <View style={styles.addPanel}>
//       <TextInput
//         style={styles.input}
//         onChangeText={getText}
//         value={cityname}
//         placeholder="City Name"
//       />

//       <TouchableOpacity
//         style={styles.button}
//         onPress={
//           ()=>{
//             props.onClick(cityname)
//             setCityname("")
//           }
//         }
//       >
//         <Octicons name="diff-added" size={20} color="gray" />
//       </TouchableOpacity>
//     </View>
//     )
// }

// function CityPanel(props){

//   return(
//     <View style={styles.cityPanel}>
//         <Caption city={props.city}/>
//         <WeatherIcon weather={props.weather} />
//         <Temperature temp={props.temp}/>
//         <DeleteButton onClick={props.onClick} id={props.id}/>
//       </View>
//     )
// }

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

// function DeleteButton(props){

//   const onClick = ()=>{
//     let id = props.id
//     props.onClick(id)
//   }

//   return(
//     <TouchableOpacity
//         style={styles.button}
//         onPress={onClick}
//       >
//         <MaterialCommunityIcons name="minus-box-outline" size={20} color="gray" /> 
//       </TouchableOpacity>
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