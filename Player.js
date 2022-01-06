import React, { useState, useCallback, useRef } from "react";
import { View, Alert,TouchableOpacity, Text,StyleSheet } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export const Player =({codeVideo,setModalVisible}) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("Video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={{backgroundColor:'black', marginTop:80, marginBottom:30}}>
      <YoutubePlayer
        height={232}
        play={playing}
        videoId={codeVideo}
        onChangeState={onStateChange}
      />

       <View style={{alignItems:'center'}} >

       <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)} >
       
       <Text style={{color:'white'}} > See Description </Text>

      </TouchableOpacity>

       </View>
      
      {/* <Button title='description' onPress={() => setModalVisible(true)} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  
  button: {

    // justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    padding:5,
    borderColor:'yellow',
    marginTop:30,
    borderRadius:20,
    width:150

  }

});
