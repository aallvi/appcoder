import React, { useEffect, useState,} from 'react'
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableHighlight,TouchableOpacity, View } from 'react-native'
import * as Location from 'expo-location'
import { MapaSatelital } from './MapaSatelital';



export const LocationSelector = props => {
    const [pickedLocation, setPickedLocation] = useState(null)

    const verifyPermissions = async () => {
        const {status} = await Location.requestForegroundPermissionsAsync()

        if (status !=='granted'){
            Alert.alert(
                'Permisos insuficientes',
                'dale permiso a la ubicacion',
                [{text:'Ok'}]
            );
            return false;
        }
        return true;
    }

    const handlePickLocation = async () => {
        console.log('hola')
        const isLocationOk = await verifyPermissions()
        console.log('isLocationOk',isLocationOk)
        // if (!isLocationOk) return;

        const location = await Location.getCurrentPositionAsync({
            timeout:5000
        })

        setPickedLocation(location)

        console.log(pickedLocation.coords)

    }


    return (
        <View style={{backgroundColor:'black',flex:1}} >
      
      <TouchableHighlight
      onPress={ () =>  handlePickLocation()}
        >
       
            <View style={{backgroundColor:'green',marginTop:50,height:40,justifyContent:'center'}} >
            <Text style={{color:'white',textAlign:'center',fontSize:20}} >Get Location</Text>

            </View>
        </TouchableHighlight>

        {
      
      pickedLocation? 
      < >
       <MapaSatelital latitud={pickedLocation.coords.latitude} longitud={pickedLocation.coords.longitude}/>
       

      </>
      :  <Text style={{textAlign:'center',marginTop:20,color:'white'}} > Comparte ubicacion para sacar una foto satelital directamente de la nasa</Text>
        }
 
      
            
        </View>
    )
}
