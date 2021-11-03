import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react'; //import the default export in the module
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, getDoc, doc } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {

};

// Initialize Firebase
initializeApp(firebaseConfig);
const firestore = getFirestore();

export default function App (){


  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [userInfo, setUserInfo] = useState([])


  const saveData = async() =>{

  }

  const getData = async() =>{
  }

  useEffect(()=>{
    getData();
  },[])

    return(
      <View style={styles.container}>
        <TextInput
          style = {{borderColor:"black", borderBottomWidth:1}}
          placeholder="First Name"
          defaultValue={firstname}
          onChangeText={text => setFirstname(text)}
        />
        <TextInput
          style = {{borderColor:"black", borderBottomWidth:1}}
          placeholder="Last Name"
          defaultValue={lastname}
          onChangeText={text => setLastname(text)}
        />
        <Button
          color = "#2A3132"
          title = "save"
          onPress = {()=>saveData()}
        />
        <Button
          color = "#2A3132"
          title = "delete"
          onPress = {()=>removeData(firstname)}
        />
        {userInfo.map(user => <Users {...user}/>)}
        </View>
      )
}

function Users(props){
    return(
      <View>
        <Text>{props.firstname}</Text>
        <Text>{props.lastname}</Text>
        <Text>{props.email}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin:10
  }
});

