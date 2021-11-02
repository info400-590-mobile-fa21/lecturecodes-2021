import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'; //import the default export in the module
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';


export default function App() {

  const [name, setName] = useState({firstName:null, lastName:null})

  const saveData = async()=>{

    // await AsyncStorage.setItem("name",name)
    const jsonValue = JSON.stringify(name)
    await SecureStore.setItemAsync("name",jsonValue)
  }

  useEffect(async()=>{
    const result = await SecureStore.getItemAsync("name")

    if(result){
      const jsonValue = JSON.parse(result)
      setName(jsonValue)
    }
    // setName(result)
  },[])

  const clearData = async()=>{
    await SecureStore.deleteItemAsync("name")
    setName(null)
  }


  return(
    <View style={styles.container}>
      <TextInput
        style = {{borderColor:"black", borderBottomWidth:1}}
        placeholder="First Name"
        defaultValue={name?name.firstName:null}
        onChangeText={text=>setName({...name, firstName:text})}
      />
      <TextInput
        style = {{borderColor:"black", borderBottomWidth:1}}
        placeholder="Last Name"
        defaultValue={name?name.lastName:null}
        onChangeText={text=>setName({...name, lastName:text})}
      />
      <Button
        color = "#2A3132"
        title = "save"
        onPress = {saveData}
      />
      <Button
        color = "#2A3132"
        title = "clear"
        onPress = {clearData}
      />
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin:2
  },
});
