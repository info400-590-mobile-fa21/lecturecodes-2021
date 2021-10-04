import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import background from './assets/background.jpg'

// === ImageBackground Component ===
/*      <ImageBackground 
        source={background} 
        style={styles.background} 
        blurRadius="5"
        resizeMode="cover">
           
      </ImageBackground>
*/

// === Switch Component ===
/*
<Switch
          //background color
          trackColor={{ false: "grey", true: "blue" }}
          //foreground color
          thumbColor={this.state.isEnabled ? "green" : "yellow"}
          //ios background color
          ios_backgroundColor="purple"
          //what to do when user switch on and off
          onValueChange={this.setEnabled}
          value={this.state.isEnabled}
        />
*/

// === TextInput Component ===
/*
<TextInput
          style={styles.textInput}
          onChangeText={text => {
            this.setState({text:text});
            console.log(this.state.text);
            }
          }
          multiline={true}
          placeholder="put in some text"
        />
*/

export default function App() {

  return (
    <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
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
  },background: {
    width:"100%",
    height:"100%",
    justifyContent:"center",
    alignItems: "center",
  },text:{
    color:"#FFFFFF",
    backgroundColor:"#000000C0"
  }, textInput:{
    borderWidth:1,
    // borderBottomWidth:1,
    borderColor: "black",
    height:300,
    maxHeight:300,
    textAlignVertical:"top"
  }
});
