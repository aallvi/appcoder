import React, { useEffect, useState } from 'react'
import {Ionicons} from '@expo/vector-icons'
import { useDispatch,useSelector } from 'react-redux';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import { favorite } from '../store/actions/app.actions';




export const Paginador = ({dia,mes,ano,setDia,setMes,setAno,apod}) => {

  const [hoy, setHoy] = useState(dia)
   
  console.log('hoy',hoy)
  console.log('dia',dia)

  const [objFavorito, setObjFavorito] = useState({})
    
  const favoritos = useSelector(state => state.app.favoritos)
   
  const [isFav, setIsFav] = useState('')

    
   
    // console.log('favo',objFavorito)

    const {title,hdurl,copyright,date,explanation,url} = apod


    const dispatch = useDispatch()


    

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
        
        if(isFav != undefined ){
            Alert.alert(
                "Ya esta en Favoritos",
                "Intenta con otra Fotografia",
                [
                  {
                    text: "Ok",
                  },
                ],
                
              );
              return
        }

        console.log('añadiendo')
        dispatch(favorite({
            title: objFavorito.title,
            copyright: objFavorito.copyright,
            date: objFavorito.date,
            explanation: objFavorito.explanation,
            url: objFavorito.url
        }))


    }

    useEffect(() => {
        setObjFavorito({title,url,explanation,date,copyright})
    
     const found = favoritos.find(fav => fav.date === apod.date)

    console.log('found',found)
    setIsFav(found)
    }, [apod])

   

    useEffect(() => {
        
        const found = favoritos.find(fav => fav.date === apod.date)

        console.log('found',found)
        setIsFav(found)
    }, [favoritos])


    return (
        <View style={styles.paginador}>

        <TouchableOpacity
        onPress={( ) => handleBack() }
        >
    
       <Ionicons name='caret-back-outline' size={30} color='white' />

       </TouchableOpacity>
       
       {
        apod.date != 'infinito' &&
        <TouchableOpacity
        onPress={( ) => favori() }
        >

       <Ionicons name='star-outline' size={30} color={isFav===undefined ? 'grey' : 'yellow' } />

       </TouchableOpacity>

       }
      


       {    hoy == dia ? null : 

           <TouchableOpacity
           onPress={( ) => handleAdd() }
           >
   
          <Ionicons name='caret-forward-outline' size={30} color='white' />
   
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
        marginTop:10,
        marginBottom:5
    }
})