import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, TouchableOpacity} from 'react-native';


// /* === TouchableHighlight ===*/
// <TouchableHighlight onPress={()=>{}}>
//   <View style={styles.button}>
//     <Text style={styles.text}>I'm also a button!</Text>
//   </View>
// </TouchableHighlight>


// /* === TouchableOpacity ===*/
// <TouchableOpacity style={styles.button} onPress={()=>{}}>
//     <Text style={styles.text}>I'm a button too!</Text>
// </TouchableOpacity>

// // === Button Component ===
// <Button
//   title = "I'm a button!"
//   //color set the text color on iOS and background color on Android
//   color = "red"
//   onPress = {(e)=>{alert(e.target.textContent)}}/>


// // === flex items ===
// <View style={styles.item1}>
//     <Text>item1</Text>
//   </View>
//   <View style={styles.item2}>
//     <Text>item2</Text>
//   </View>
//   <View style={styles.item3}>
//     <Text>item3</Text>
//   </View>
//   <View style={styles.item4}>
//     <Text>item4</Text>
//   </View>
  

export default class App extends React.Component {
  render(){
    return(  
        <View style={styles.container}>
          <View style={styles.item1}>
            <Text>item1</Text>
          </View>
          <View style={styles.item2}>
            <Text>item2</Text>
          </View>
          <View style={styles.item3}>
            <Text>item3</Text>
          </View>
          <View style={styles.item4}>
            <Text>item4</Text>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // flexWrap:'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap:'wrap',
    backgroundColor: '#555',
    margin:2
  },text:{
    color:"white"
  }, button:{
    backgroundColor: "crimson",
    padding:10,
    margin:10
  },item1:{
    flex:2,
    // flexGrow:3,
    width:100,
    height:40,
    backgroundColor:"mediumpurple",
    padding: 10,
    margin:2,
  }, item2:{
    flex:1,
    width:100,
    height:40,
    backgroundColor:"skyblue",
    padding: 10,
    margin:2,
  }, item3:{
    flex:1,
    width:100,
    height:40,
    backgroundColor:"teal",
    padding: 10,
    margin:2,
  },item4:{
    flex:1,
    width:100,
    height:40,
    backgroundColor:"palevioletred",
    padding: 10,
    margin:2,
  }
});
