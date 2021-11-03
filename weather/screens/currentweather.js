import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, FlatList, KeyboardAvoidingView} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';
import {styles} from '../utilities/style.js'
// import {Temperature, WeatherIcon, Caption} from './component.js'
import * as MyComponent from '../components/component.js'
import {getWeather} from '../utilities/api.js'

// const API_KEY = "01db2ead9a994354bfbb6adaff45411c"

export function CurrentWeather(props){

  const [panels, setPanels] = useState([]);

  // const getWeather = async(cityname)=>{
  //   const response = await fetch("https://api.weatherbit.io/v2.0/current?city=" + cityname + "&key=" + API_KEY + "&units=i");
  //   const result = await response.json();

  //   return result
  // }

  const addPanel = (newCity)=>{
    getWeather(newCity).then(result=>{

      let newPanel = {
        city:newCity,
        weather: "https://www.weatherbit.io/static/img/icons/" + result.data[0].weather.icon + ".png",
        temp:result.data[0].temp,
        id: Math.floor(Math.random() * 1000),
        onClick:removePanel
      }
      
      setPanels([...panels,newPanel])
    })
  }

  const removePanel = (id)=>{
    setPanels(prevPanels => (prevPanels.filter(item => item.id !== id)))
  }

  return(
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.innerView}>
          <AddPanel onClick={addPanel}/>
          
          <FlatList
            data={panels}
            renderItem={({item}) => <CityPanel {...item} />}
            keyExtractor={item => item.id}
          />
        </KeyboardAvoidingView>
    </View>
    )
}

function AddPanel(props){

  const [cityname, setCityname] = useState("")

  let getText = (text)=>{
    setCityname(text)
  }

  return(
    <View style={styles.addPanel}>
      <TextInput
        style={styles.input}
        onChangeText={getText}
        value={cityname}
        placeholder="City Name"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={
          ()=>{
            props.onClick(cityname)
            setCityname("")
          }
        }
      >
        <Octicons name="diff-added" size={20} color="gray" />
      </TouchableOpacity>
    </View>
    )
}

function CityPanel(props){

  return(
    <View style={styles.cityPanel}>
        <MyComponent.Caption city={props.city}/>
        <MyComponent.WeatherIcon weather={props.weather} />
        <MyComponent.Temperature temp={props.temp}/>
        <MyComponent.DeleteButton onClick={props.onClick} id={props.id}/>
      </View>
    )
}



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