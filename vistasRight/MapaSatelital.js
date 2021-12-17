import React, { useEffect, useState,} from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableHighlight,TouchableOpacity, View } from 'react-native'
import Satelital from '../src/api/ImgSat';
// import { LocationSelector } from './LocationSelector';


export const MapaSatelital = ({latitud,longitud}) => {

    useEffect(() => {

        Satelital.get('/planetary/earth/imagery')
        .then(
          resp => {
            // console.log('satelital',resp)}
            // console.log('img',apod)
          });
    
    
    
      }, [])
      
    

   const uri = `https://api.nasa.gov/planetary/earth/imagery?lon=${longitud}&lat=${latitud}&date=2021-01-01&dim=0.15&api_key=DEMO_KEY`

    return (
        <View style={{flex:1,backgroundColor:'black'}} >
          <Image
          
          source={{uri}}
          style={styles.image}
          />

          {/* <LocationSelector /> */}

          <Text style={{color:'white', textAlign:'center',marginTop:20}} > Latitud: {latitud} & Longitud: {longitud}  </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width:400,
        height:400,
        alignItems:'center',
        borderRadius:10,
        marginTop:30,
        alignSelf:'center'
    }
})
