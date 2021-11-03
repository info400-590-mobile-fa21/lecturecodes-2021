import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react'; //import the default export in the module
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, getDoc, doc } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALPKf5zJUKxMsJxXKPGFysgR4eUuzIz_0",
  authDomain: "demo19-61d58.firebaseapp.com",
  projectId: "demo19-61d58",
  storageBucket: "demo19-61d58.appspot.com",
  messagingSenderId: "493958980793",
  appId: "1:493958980793:web:aa601385cfb8d359112768"
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

    await setDoc(doc(firestore, "users", "1"), {
      firstname: firstname,
      lastname: lastname,
      email: "abc@gmail.com"
    });

  }

  const getData = async() =>{

    // const colRef = collection(db, "users");

    const docRef = doc(firestore, "users", "0ZABmxTUga8l45tb0Y9O");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {

      let newUser = {
        firstname: docSnap.data().firstname,
        lastname: docSnap.data().lastname,
        email: docSnap.data().email
      }

      setUserInfo([...userInfo, newUser])      

      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }


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
        {userInfo.map(user => <User {...user}/>)}
        </View>
      )
}

function User(props){
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

