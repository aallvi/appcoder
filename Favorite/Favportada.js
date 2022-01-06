import React, { useEffect, useState }  from 'react'
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableHighlight,TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Favorite } from './Favorite'
import { favorite, loadFavs, loadFavsOffline } from '../store/actions/app.actions';

export const Favportada = () => {

    const favoritos = useSelector(state => state.app.favoritos)
    const contador = useSelector(state => state.app.contador)

    const dispatch = useDispatch()


    const uid = useSelector(state => state.name.uid)

    useEffect(() => {
        if(uid == null){
          dispatch(loadFavsOffline())
          // return
          // console.log('cargaronoffline')
        }else {
    
          dispatch(loadFavs())
        // console.log('cargaron')
    
         }
    
        
      }, [])

      
    useEffect(() => {
        if(uid == null){
          dispatch(loadFavsOffline())
          // return
          // console.log('cargaronoffline')
        }else {
    
          dispatch(loadFavs())
        // console.log('cargaron')
    
         }
    
        
      }, [contador])



     


    return (
    
    
    <>
        {/* <Text style={styles.titulo} > ¡Añade algo espacial a tus favoritos! </Text> */}
    
    {
        favoritos.length > 0 ?  <Favorite/> :
        <View style={{backgroundColor:'black',flex:1,justifyContent:'center'}} >
    
        <Text style={styles.titulo} > ¡Add something special to your favorites! </Text>
 
         </View>
    }
    
    
    </>

       


        
    )
}

const styles=StyleSheet.create({
    titulo: {
        color:'yellow',
        textAlign:'center', 
        fontSize:20,
        // marginTop:30
    },
})