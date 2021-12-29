
import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

export const Musica = () => {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('./assets/hello.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }


    useEffect(() => {
        return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
    }, [sound])

 
useEffect(() => {
    setInterval(() => {
        playSound()
    }, 20000);
   

}, [])
  

  return (
    <View >
      {/* <Button title="Play Sound" onPress={playSound} /> */}

      <Text style={{color:'white'}} > HOLA</Text>
    </View>
  );
}