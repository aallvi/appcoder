import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/actions/name.actions';
import { Paginador } from './Paginador';
import moment from 'moment'
import { favorite } from '../store/actions/app.actions';


  const {width,height} =  Dimensions.get('window')
  

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets()
  const dispatch = useDispatch()
  const [apod, setApod] = useState({})
  const {title,hdurl,copyright,date,explanation,url} = apod

 const fecha = moment().format('L');
 const fechadividida = fecha.split('/');

 const [dia, setDia] = useState(fechadividida[1])
 const [mes, setMes] = useState(fechadividida[0])
 const [ano, setAno] = useState(fechadividida[2])



  const consultarNasa = async ()=> {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?date=${ano}-${mes}-${dia}&api_key=9SeJAnzjxX5SfJx9uNrwjwivEb9b8bh5qexvggT7`
    );
    const json = await response.json();
  
    setApod(json)
  }
  

const handleLogout = () => {
  dispatch(logout())
}


  useEffect(() => {
    consultarNasa()
  }, [dia])


    return (
       
       
        <View style={styles.container}>
         
            <TouchableOpacity style={{marginTop:10}}
            onPress={() => handleLogout() }
            style={{alignItems:'flex-end',marginTop:10,marginRight:20}}
            >
              <Text style={{fontSize:15, color:'red'}} >Cerrar Sesion</Text>
            </TouchableOpacity>
            
            {/* Titulo e Imagen */}
          <View style={styles.imageContainer} >

          <Text style={{marginTop:top,color:'white', fontSize:20, textAlign:'center'}} > {title} </Text>
          <Paginador setDia={setDia} dia={dia} mes={mes} setMes={setMes} apod={apod} />
          
          <Image
                  
                  source={{ uri:url}}
                  style={styles.image}
                  
          />
          
          {/* Fecha, paginador, copyright */}
         
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
      height:height *0.6,
      alignItems:'center',
      borderRadius:10,
      marginTop:10,
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
  