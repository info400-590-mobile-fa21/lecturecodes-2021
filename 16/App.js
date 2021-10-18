import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import MapView from 'react-native-maps';// import the default export from that module
import {Marker, Callout} from 'react-native-maps'; //import one of the export from that module
import * as Location from 'expo-location'; //import the whole module


export default function App() {

  return (
    <View style={styles.container}>
    </View>
  );
}


var cafes =[{
  coordinate: {latitude:39.1714804, longitude:-86.5368812},
  title:"Crumble Cafe West",
  description:"Cumble Cafe on the west side of Bloomington"
  },
  {
    coordinate: {latitude:39.1668473, longitude:-86.5372437},
    title:"Inkwell Cafe",
    description:"Inkwell Cafe on the College ave"
  },
  {
    coordinate: {latitude:39.1670517, longitude:-86.4966707},
    title:"Needmore Coffee Roasters",
    description:"Needmore Cafe on the east side of Bloomington"
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },map:{
    width: 300,
    height: 300
  }
});
