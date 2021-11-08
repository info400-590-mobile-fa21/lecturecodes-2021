import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithRedirect, GoogleAuthProvider, getRedirectResult } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyALPKf5zJUKxMsJxXKPGFysgR4eUuzIz_0",
  authDomain: "demo19-61d58.firebaseapp.com",
  projectId: "demo19-61d58",
  storageBucket: "demo19-61d58.appspot.com",
  messagingSenderId: "493958980793",
  appId: "1:493958980793:web:aa601385cfb8d359112768"
};

initializeApp(firebaseConfig);
const auth = getAuth();


export default function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState("")
  const [user, setUser] = useState(null)

  const signUp = ()=>{
    createUserWithEmailAndPassword(auth,email, password)
    .then(result=>{
      const user = result.user
      setUser(user)
    })
    .catch(error=>{
      console.log(error.code + " : " + error.message)
    })

  }

  const logIn = ()=>{

    signInWithEmailAndPassword(auth,email, password)
    .then(result=>{
      const user = result.user
      setUser(user)
    })
    .catch(error=>{
      console.log(error.code + " : " + error.message)
    })


  }

  const logOut = ()=>{
    signOut(auth)
    .then(()=>{
      setUser(null)
    })
    .catch(error=>{
      console.log(error.code + " : " + error.message)
    })

  }

  const signInGoogle = ()=>{

    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
    .then(()=>{
    })
    .catch(error=>{
      console.log(error.code + " : " + error.message)
    })

  }

  useEffect(()=>{
    getRedirectResult(auth)
    .then(result=>{
      console.log(result)
      const user = result.user
      const token = result.accessToken
      setUser(user)
    })
    .catch(error=>{
      // console.log(error.code + " : " + error.message)
      alert(error.code + " : " + error.message)
    })

  })

  return (
    <View style={styles.container}>
      <TextInput
        style = {{borderColor:"black", borderBottomWidth:1}}
        placeholder="Email"
        defaultValue={email}
        onChangeText={text=>setEmail(text)}
      />
      <TextInput
        style = {{borderColor:"black", borderBottomWidth:1}}
        placeholder="Password"
        defaultValue={password}
        secureTextEntry={true}
        onChangeText={text=>setPassword(text)}
      />
      <Button
        color = "#2A3132"
        title = "Sign Up"
        onPress = {signUp}
        style={styles.button}
      />
      <Button
        color = "#2A3132"
        title = {user?"Sign out":"Sign in"}
        onPress = {user?logOut:logIn}
        style={styles.button}
      />
      <Button
        color = "#2A3132"
        title = "Sign in via Google"
        onPress = {signInGoogle}
        style={styles.button}
      />
      <Text>Current user: {user?user.email:null}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin:10
  }, button:{
    margin:20
  }
});
