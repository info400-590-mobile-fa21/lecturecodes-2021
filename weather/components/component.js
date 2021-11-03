import React,{useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput, FlatList, KeyboardAvoidingView} from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {styles} from '../utilities/style.js'


export function AddPanel(props){

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

export function Temperature(props){
  return(
    <Text>{props.temp}F</Text>
    )
}

export function Caption(props){
  return(
    <Text>{props.city}</Text>
  )
}

export function WeatherIcon(props){
  return(
    <Image source={{uri:props.weather}} style={styles.icon}/>
    )
}

export function DeleteButton(props){

  const onClick = ()=>{
    let id = props.id
    props.onClick(id)
  }

  return(
    <TouchableOpacity
        style={styles.button}
        onPress={onClick}
      >
        <MaterialCommunityIcons name="minus-box-outline" size={20} color="gray" /> 
      </TouchableOpacity>
    )
}