import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react'; //import the default export in the module
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
// import * as firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, getDoc, doc } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDchcCZsDKr1EAQG5lz1GSUKL34ADUOhJE",
    authDomain: "lecture19-76a4f.firebaseapp.com",
    projectId: "lecture19-76a4f",
    storageBucket: "lecture19-76a4f.appspot.com",
    messagingSenderId: "148183283343",
    appId: "1:148183283343:web:bff11a0e071b61d67e22fa",
    measurementId: "G-P99HFCXQSW"
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

    await setDoc(doc(firestore, "users","1"), {
      firstname: "Christina",
      lastname: "Chung",
      email: "cfchung@iu.edu"
    });
    // db.collection("users").add({
    //   firstname:"Mochi",
    //   lastname:"Chung",
    //   email:"cfchung@iu.edu"
    // }).catch(function(error){
    //   console.error("Error in adding document:", error);
    // })

    console.log("save Data")
  }

  const getData = async() =>{


    const docRef = doc(firestore, "users", "1");
    const docSnap = await getDoc(docRef);

    

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const newUser = {
        firstname: docSnap.data().firstname,
        lastname: docSnap.data().lastname,
        email: docSnap.data().email,
      }
      setUserInfo([...userInfo, newUser])
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
     // try{

     //  db.collection("users").get().then((querySnapshot) => {
     //    querySnapshot.forEach((doc) => {
     //      console.log(doc.data());

     //      newUser = {
     //        firstname: doc.data().firstname,
     //        lastname: doc.data().lastname,
     //        email: doc.data().email,
     //      }
     //      setUserInfo([...userInfo, newUser])
     //      // this.setState(prevState=>({
     //      //   userInfo:[...prevState.userInfo, {firstname:doc.data().firstname,lastname:doc.data().lastname,email:doc.data().email}]
     //      // }))
     //    })
     //  });  
      
    // }catch (e){
    //   console.error(e)
    // }

    // console.log("get Data")
  }

  const getQueryData = async(lastname, firstname) =>{
     try{

      firestore.collection("users").where("lastname","==",lastname).where("firstname", "==", firstname).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log(doc.data());
          newUser = {
            firstname: doc.data().firstname,
            lastname: doc.data().lastname,
            email: doc.data().email,
          }
          setUserInfo([...userInfo, newUser])

          // this.setState(prevState=>({
          //   userInfo:[...prevState.userInfo, {firstname:doc.data().firstname,lastname:doc.data().lastname,email:doc.data().email}]
          // }))
        })
      });  
      
    }catch (e){
      console.error(e)
    }

    console.log("get Data")
  }

  const getOrderedData = async() =>{
     try{

      db.collection("users").orderBy("email","desc").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());

          newUser = {
            firstname: doc.data().firstname,
            lastname: doc.data().lastname,
            email: doc.data().email,
          }
          setUserInfo([...userInfo, newUser])
          // this.setState(prevState=>({
          //   userInfo:[...prevState.userInfo, {firstname:doc.data().firstname,lastname:doc.data().lastname,email:doc.data().email}]
          // }))
        })
      });  
      
    }catch (e){
      console.error(e)
    }

    console.log("get Data")
  }

  const removeData = async(firstname) =>{
    db.collection("users").where("firstname", "==", firstname).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // console.log(doc.data());
          doc.ref.delete();
        // this.setState(prevState=>({
        //   userInfo:[...prevState.userInfo, {firstname:doc.data().firstname,lastname:doc.data().lastname,email:doc.data().email}]
        // }))
      })
    });  
  }

  useEffect(()=>{
    getData();
    // console.log(this.state.userInfo)
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

