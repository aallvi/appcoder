import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/actions/name.actions';
import { Musica } from '../Musica';
import { Paginador } from './Paginador';
import moment from 'moment'
import { favorite, loadFavs } from '../store/actions/app.actions';
import { Modaldescription } from './Modaldescription';
// import { Description } from './Modal';


  const {width,height} =  Dimensions.get('window')
  

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets()
  const dispatch = useDispatch()
  const [apod, setApod] = useState({})
  
  //Datos que trae la api
  const {title,hdurl,copyright,date,explanation,url} = apod

  // Usamos Moment js para definir la fecha de hoy, la modificamos para ingresarla en la consulta a la api
 const fecha = moment().format('L');
 const fechadividida = fecha.split('/');

 const [dia, setDia] = useState(fechadividida[1])
 const [mes, setMes] = useState(fechadividida[0])
 const [ano, setAno] = useState(fechadividida[2])

//OBjetos Default
 const Objdefault = {title:'¡La Nasa debe postear algo!',date:'Infinito', copyright:'La Nasa',url:'https://images.pexels.com/photos/5259414/pexels-photo-5259414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
 const defaultcopy = {
   copyright: 'No Copyright'
 }

//  Consultar API
  const consultarNasa = async ()=> {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?date=${ano}-${mes}-${dia}&api_key=9SeJAnzjxX5SfJx9uNrwjwivEb9b8bh5qexvggT7`
    );
    const json = await response.json();

    // Definir un objeto default por si usuario adelanta la fecha
    if(json.code === 400){
      setApod(Objdefault)
    return
    }
    // Si Copyright existe lo añadimos, sino agregamos el objeto default
    if(json.copyright ){
       setApod(json)
    } else {
      const finalResult = Object.assign(json,defaultcopy)
      setApod(finalResult)
    }
    
  }
  

const handleLogout = () => {
  dispatch(logout())
}


  useEffect(() => {
    consultarNasa()
  }, [dia])

  useEffect(() => {
    
    dispatch(loadFavs())
    console.log('cargaron')
  }, [])


  const [modalVisible, setModalVisible] = useState(false)

//   const iduser = useSelector(state => state.name.uid)
//  console.log('id usuario',iduser)
   
    return (
       <> 
        <View >
       <Modaldescription explanation={explanation} modalVisible={modalVisible} setModalVisible={setModalVisible} />
       </View>

        <View style={styles.container}>
         
            <TouchableOpacity 
            onPress={() => handleLogout() }
            style={{alignItems:'flex-end',marginRight:20}}
            >
              <Text style={{fontSize:15, color:'red'}} >Cerrar Sesion</Text>
            </TouchableOpacity>
            


            {/* Titulo e Imagen */}
          <View style={styles.imageContainer} >

          <Text style={{marginTop:top,color:'white', fontSize:19, textAlign:'center'}} > {title} </Text>
          <Paginador setDia={setDia} dia={dia} mes={mes} setMes={setMes} apod={apod} />
          
          
          {/* <Description explanation={explanation} url={url} date={date} copyright={copyright} /> */}

         
   
          <TouchableOpacity onPress={() => setModalVisible(true)  }  >
                <Image
                  
                  source={{ uri:url}}
                  style={styles.image}
                  

                  
                 />

                 {/* <Musica /> */}
              
              </TouchableOpacity>

          
          {/* Fecha, paginador, copyright */}
          <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:8, marginTop:5}} >
          <Text style={{color:'white',color:'yellow'}} > {dia}-{mes}-{ano} </Text>

          

          <Text style={{color:'white',color:'yellow'}} > {copyright} </Text>
          </View>
          
 
          </View >

       
        </View>
       
        </>
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
      width:width* 0.98,
      height:height *0.69,
      alignItems:'center',
      borderRadius:10,
      marginTop:2,
      alignSelf:'center'
      
    },

    imageContainer :{
      // justifyContent:'center',
      marginTop:10,
      // flex:1,
      // alignItems:'center',
      borderRadius:10,
      borderColor:'blueviolet'
    }
  });
  