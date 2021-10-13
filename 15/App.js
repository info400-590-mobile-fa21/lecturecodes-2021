import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

export default function App() {
  const Stack = createNativeStackNavigator();
  // const Tap = createBottomTabNavigator();
  // const Tap = createMaterialTopTabNavigator();
  // const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="First">
          <Stack.Screen
            name="First"
            component={FirstScreen}
          />
          <Stack.Screen
            name="Second"
            component={SecondScreen}
          />
          <Stack.Screen
            name="Third"
            component={ThirdScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

function FirstScreen (props){
    return(
      <View style={styles.first}>
        <Text>First Screen</Text>
      </View>
      )
}

function SecondScreen (props){
    return(
      <View style={styles.second}>
        <Text>Second Screen</Text>
      </View>
      )
}

function ThirdScreen (props){
    return(
      <View style={styles.third}>
        <Text>Third Screen</Text>
      </View>
      )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },first:{
    flex: 1,
    backgroundColor:'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },second:{
    flex: 1,
    backgroundColor:'lightpink',
    alignItems: 'center',
    justifyContent: 'center',
  },third:{
    flex: 1,
    backgroundColor:'lightyellow',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
