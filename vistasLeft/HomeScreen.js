import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import ApodNasa from '../src/api/ApodNasa';
import { logout } from '../store/actions/name.actions';

  const {width,height} =  Dimensions.get('window')

export const HomeScreen = () => {

  // console.log(width)

 const {top} = useSafeAreaInsets()

  const dispatch = useDispatch()

  const [apod, setApod] = useState({})

  const {title,hdurl,copyright,date,explanation} = apod

const handleLogout = () => {
    
  dispatch(logout())

}


  useEffect(() => {

    ApodNasa.get('/planetary/apod')
    .then(
      resp => {
        setApod(resp.data)
        console.log('apod',apod)
      });



  }, [])

     

    return (
       
       
        <View style={styles.container}>
         
            <TouchableOpacity style={{marginTop:10}}
            onPress={() => handleLogout() }
            style={{alignItems:'flex-end',marginTop:10,marginRight:20}}
            >
              <Text style={{fontSize:15, color:'red'}} >Cerrar Sesion</Text>
            </TouchableOpacity>
            

          <View style={styles.imageContainer} >

          <Text style={{marginTop:top+20,color:'white', fontSize:20, textAlign:'center'}} > {title} </Text>
          <Image
                  
                  source={{ uri:hdurl }}
                  style={styles.image}
                  
          />

          <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:8}} >
          <Text style={{color:'white',color:'yellow'}} > {date} </Text>
          <Text style={{color:'white',color:'yellow'}} > {copyright} </Text>
          </View>
 
          </View >


          
          <View style={{ alignItems:'center',flex:1}} >
          <Text style={{color:'white',marginLeft:8,color:'white',textAlign:'justify',fontSize:13,marginTop:40}} > Descripcion </Text>
          </View>
         
              
            

            {/* <Text style={{color:'white'}} >Bienvenido</Text> */}

       
        </View>
       
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
    
      backgroundColor: 'black',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    image: {
      width:400,
      height:400,
      alignItems:'center',
      borderRadius:10,
      marginTop:30,
      alignSelf:'center'
      
    },

    imageContainer :{
      // justifyContent:'center',
      marginTop:20,
      // flex:1,
      // alignItems:'center',
      borderRadius:10,
      borderColor:'blueviolet'
    }
  });
  