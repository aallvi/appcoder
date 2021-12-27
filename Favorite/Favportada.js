import React, { useEffect, useState }  from 'react'
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableHighlight,TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Favorite } from './Favorite'

export const Favportada = () => {

    const favoritos = useSelector(state => state.app.favoritos)

     
     console.log('long',favoritos.length)


    return (
    
    
    <>
    
    {
        favoritos.length > 0 ?  <Favorite/> :
        <View style={{backgroundColor:'black',flex:1,justifyContent:'center'}} >
    
        <Text style={styles.titulo} > ¡Añade algo espacial a tus favoritos! </Text>
 
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
