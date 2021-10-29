import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Video } from 'expo-av';

export default function App() {

  const [image, setImage] = useState(null)
  const [cameraImage, setCameraImage] = useState(null)

  const openLibrary = async()=>{
    const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if(status !== "granted"){
      alert("Media library permission not granted")
      return
    }

    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Videos,
    })
    setImage(image.uri)

  }

  const openCamera = async()=>{
    
    const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if(status !== "granted"){
      alert("Media library permission is not granted")
      return
    }

    const cameraStatus = await ImagePicker.requestCameraPermissionsAsync()

    if(cameraStatus.status !== "granted"){
      alert("Camera permission is not granted")
      return
    }

    const image = await ImagePicker.launchCameraAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Videos,
      allowsEditing:true,
      videoMaxDuration:2
    })
    setCameraImage(image.uri)

  }

  return (
    <View style={styles.container}>
      <Button
        title="Select a photo"
        style={styles.button}
        onPress={openLibrary}
      />
      {image&&<Image source={{uri:image}} style={styles.image}/>}

      <Button
        title="Open Camera"
        style={styles.button}
        onPress={openCamera}
      />
      {/*{cameraImage&&<Image source={{uri:cameraImage}} style={styles.image}/>}*/}
      {cameraImage&&<Video source={{uri:cameraImage}} shouldPlay={true} isLooping={true} style={styles.image}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },image:{
    width:300,
    height:300
  },button:{
    margin:20
  }
});
