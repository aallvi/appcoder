import React, { useEffect, useState } from 'react'
import {Ionicons} from '@expo/vector-icons'
import { useDispatch } from 'react-redux';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { favorite } from '../store/actions/app.actions';




export const Paginador = ({dia,mes,ano,setDia,setMes,setAno,apod}) => {

  const [objFavorito, setObjFavorito] = useState({})


    useEffect(() => {
        setObjFavorito({title,url,explanation,date,copyright})
        
    }, [apod])
   
    console.log('favo',objFavorito)


  const {title,hdurl,copyright,date,explanation,url} = apod


    const dispatch = useDispatch()
    
    const [hoy, setHoy] = useState(dia)

    // console.log('apod',apod)

    const handleBack = () => {
        setDia(dia-1)
       if(dia===1){
           setDia(31)
           setMes(mes-1)
       }
       
    }

  
    
    const handleAdd = () => {
   
        setDia(dia+1)

        // setDia(dia-1)

    }

    const favori = () => {
        

        console.log('añadiendo')
        dispatch(favorite({
            title: objFavorito.title,
            copyright: objFavorito.copyright,
            date: objFavorito.date,
            explanation: objFavorito.explanation,
            url: objFavorito.url
        }))


    }

    console.log('ovjfabb',objFavorito.title)


    return (
        <View style={styles.paginador}>

        <TouchableOpacity
        onPress={( ) => handleBack() }
        >

       <Ionicons name='caret-back-outline' size={30} color='blue' />

       </TouchableOpacity>

       <TouchableOpacity
        onPress={( ) => favori() }
        >

       <Ionicons name='star-outline' size={30} color='grey' />

       </TouchableOpacity>


       {
           <TouchableOpacity
           onPress={( ) => handleAdd() }
           >
   
          <Ionicons name='caret-forward-outline' size={30} color='blue' />
   
          </TouchableOpacity> 
       }

            
        </View>
    )
}


const styles = StyleSheet.create({
    paginador:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:15,
        marginTop:10
    }
})