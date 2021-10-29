import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import MapView from 'react-native-maps';// import the default export from that module
import {Marker, Callout} from 'react-native-maps'; //import one of the export from that module
import * as Location from 'expo-location'; //import the whole module
import pin from './assets/pin.png'
import classroom from './assets/classroom.png'
import mug from './assets/cafe.png'


export default function App() {

  const [location, setLocation] = useState(null)

  const getLocation = async()=>{
    let {status} = await Location.requestForegroundPermissionsAsync()

    if (status != "granted"){
      console.log("error")
      return
    }
    // let result = await Location.getCurrentPositionAsync({})
    let result = await Location.geocodeAsync("150 S Woodlawn Ave, Bloomington, IN 47405")
    setLocation(result)
  }

  useEffect(()=>{
    getLocation()
  }, [])

  // let latitude  = 39.1713251
  // let longitude = -86.6018864

  // if (location){
  //   latitude = location.coords.latitude
  //   longitude = location.coords.longitude
  // }

  return (
    <View style={styles.container}>
    <Text>{location?location[0].latitude:null}</Text>
    <Text>{location?location[0].longitude:null}</Text>
    {/*<Text>{location?location.coords.latitude:null}</Text>*/}
    {/*<Text>{location?location.coords.longitude:null}</Text>0*/}

    {/*<MapView 
    style={styles.map}
    provider="google"
    initialRegion={{
      latitude:location?location.coords.latitude:39.1713251,
      longitude:location?location.coords.longitude:39.1713251,
      latitudeDelta:0.01,
      longitudeDelta:0.01
    }}/>*/}

    </View>
  );
}


/*<MapView 
    style={styles.map}
    provider="google"
    initialRegion={{
      latitude:39.1713251,
      longitude:-86.6018864,
      latitudeDelta:0.01,
      longitudeDelta:0.01
    }}>
    
      
    </MapView>
*/
/*{cafes.map((cafe, index)=>(
      <Marker
        key={index}
        coordinate={cafe.coordinate}
        title={cafe.title}
        description={cafe.description}
      >
        <Callout>
          <View>
            <Image source={mug} style={{width:64, height:64}}/>
            <Text>{cafe.title}</Text>
          </View>
        </Callout>

      </Marker>))}
*/
/*<Marker
        coordinate ={{latitude:39.1653449, longitude:-86.5257769}}
        title= "Lindley Hall"
        description= "I400/I590 classroom"
        // pinColor="purple"
        image={pin}
      >
        <Callout>
          <View style={{width:100, height:100}}>
            <Text>Lindley Hall</Text>
            <Image source={classroom} style={{width:40, height:40}}/>
          </View>
        </Callout>
      </Marker>*/
// <View style={{backgroundColor:"purple"}}><Text style={{color:"white"}}>PIN</Text></View>
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
    width: "100%",
    height: "100%"
  }
});
