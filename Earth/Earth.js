import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Dimensions, ScrollView, ImageBackground } from 'react-native';
import moment from 'moment'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const {width,height} =  Dimensions.get('window')


export const Earth = () => {
 const {top} = useSafeAreaInsets()

 const fecha = moment().format('L');
 const fechadividida = fecha.split('/');

 const [dia, setDia] = useState(fechadividida[1]-1)
 const [mes, setMes] = useState(fechadividida[0])
 const [ano, setAno] = useState(fechadividida[2])

  const [img, setImg] = useState('')
  const [largonjson, setlargonjson] = useState(0)
  const [coordenadas, setcoordenadas] = useState('')

  const [cambiarCords, setcambiarCords] = useState(0)
  const [info, setinfo] = useState('')

    const consultarEarth = async ()=> {
        const response = await fetch(
          `https://api.nasa.gov/EPIC/api/natural/date/${ano}-${mes}-${dia}?api_key=9SeJAnzjxX5SfJx9uNrwjwivEb9b8bh5qexvggT7`
        );
        const json = await response.json();
        setlargonjson(json.length)

        // console.log('largg',json.length)

        // console.log('cuantasson',json)


        setImg(json[cambiarCords].image)
        // console.log('tierra',json[cambiarCords].image)
        // console.log('cordenadas',json[cambiarCords].centroid_coordinates)
        setcoordenadas(json[cambiarCords].centroid_coordinates)
        setinfo(json[cambiarCords])

       setUrl(`https://api.nasa.gov/EPIC/archive/natural/${ano}/${mes}/${dia}/png/${json[cambiarCords].image}.png?api_key=9SeJAnzjxX5SfJx9uNrwjwivEb9b8bh5qexvggT7`)

      }

      const [url, setUrl] = useState(`https://api.nasa.gov/EPIC/archive/natural/${ano}/${mes}/${dia}/png/${img}.png?api_key=9SeJAnzjxX5SfJx9uNrwjwivEb9b8bh5qexvggT7`)
    
  
 
      const changeCords = () => {
           
        if (largonjson-1 == cambiarCords){

             setcambiarCords(0)
             return
        }
        setcambiarCords(cambiarCords+1)


      }
 
useEffect(() => {
    
    consultarEarth() 
    console.log(largonjson)
    // console.log('url',url)
    
}, [dia,cambiarCords])
// console.log('img',img)

 const background = { uri: "http://papers.co/wallpaper/papers.co-nc27-night-sky-dark-star-lights-tree-nature-bw-dark-4-wallpaper.jpg" }

    return (
        <ImageBackground 
        
        source={background}
        style={{flex:1,justifyContent:'center',width:width,height:'100%'}}
        
        >
        <View style={styles.container} >
            <Text style={{marginTop:40,color:'white', fontSize:19, textAlign:'center'}} >Earth </Text>
            <Text style={{color:'yellow', textAlign:'center', marginTop:10}}>{ano}-{mes}-{dia}</Text>
            <View style={styles.imageContainer}>

            <Image
                  
                  source={{ uri:url}}
                  style={styles.image}
                  
                 />
            </View>
            <ImageBackground 
        
        source={background}
        style={{justifyContent:'center',width:width}}
        
        >
            
            <Text style={{color:'yellow',textAlign:'center'}} >
               Latitude : {coordenadas.lat} - 
               Longitude : {coordenadas.lon}
            </Text>
            

      
            <TouchableOpacity onPress={() => changeCords() } >

                <Text style={{...styles.textStyle,...styles.button1}} > Change Coordinates </Text>
           
            </TouchableOpacity>

            <Text style={{color:'yellow',textAlign:'center',fontSize:14,marginTop:10}} >
               {info.caption}
            </Text>

            {/* <TouchableOpacity onPress={() => setDia(dia-1) } >
                <Text style={{color:'white'}} > Back </Text>
            </TouchableOpacity> */}
            
           
            </ImageBackground>

        </View>

        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container: {
      flex:1,
    
    //   backgroundColor: 'black',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    image: {
      width:width,
      height:height *0.64,
      alignItems:'center',
      borderRadius:10,
    //   marginTop:2,
      alignSelf:'center'
      
    },

    imageContainer :{
      justifyContent:'center',
    
    //   marginTop:20,
      // flex:1,
      // alignItems:'center',
    //   borderRadius:10,
    //   borderColor:'blueviolet'
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "black",
      },
  
      buttonClose1: {
        backgroundColor: "black",
      },
      
      button1: {
          borderWidth:1,
          borderColor:'yellow',
          borderRadius: 20,
          padding: 4,
          width:200,
          elevation: 2,
          marginTop:10,
          alignSelf:'center'
        },
      textStyle: {
        color: "white",
        textAlign: "center"
      },
  
  });