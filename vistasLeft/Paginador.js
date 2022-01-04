import React, { useEffect, useState } from 'react'
import {Ionicons} from '@expo/vector-icons'
import { useDispatch,useSelector } from 'react-redux';
import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import { favorite, favoriteOffline } from '../store/actions/app.actions';




export const Paginador = ({dia,mes,ano,setDia,setMes,setAno,apod}) => {

  const [hoy, setHoy] = useState(Number(dia))
  const [mesHoy, setMesHoy] = useState(Number(mes))

  const [add, setadd] = useState(false)
  const [less, setless] = useState(false)
   
//   console.log('hoy',typeof hoy)
//   console.log('dia',typeof dia)
//   console.log('mes',typeof mes)
//   console.log('apod',apod)

  const [objFavorito, setObjFavorito] = useState({})
    
  const favoritos = useSelector(state => state.app.favoritos)
   
  const [isFav, setIsFav] = useState('')

    
   
    // console.log('favo',objFavorito)

    const {title,hdurl,copyright,date,explanation,url} = apod


    const dispatch = useDispatch()



    const handleBack = () => {
       setless(!less)

        setDia(dia-1)

       if(dia===1){
           setDia(31)
           if(mes=='01'){
               setMes(12)
               setAno(2021)
           }else {
            setMes(mes-1)

           }
          return
       }


       
       
    }

    const handleAdd = () => {
        setadd(!add)
   
        setDia(dia+1)
        if(dia==31){
            setDia(1)
            if(mes == '12'){
                setMes(1)
                setAno(2022)
            }else {
                setMes(mes+1)
            }
            return
        }

        // if(dia == 31 && ano ==2021 && mes == 12){
        //     setDia(1)
        //     setMes(1)
        //     setAno(2022)
        //     return
        // }
        // setDia(dia-1)

    }
// console.log('less',less)

    useEffect(() => {
   
        if(apod.date === 'Infinito'){
            setDia(30)
            return
        }
    
    }, [less])

// console.log('add',add)

    useEffect(() => {
   
        if(apod.date === 'Infinito'){
            setDia(1)
            // setMes(mes+1)
            return
        }
    
    }, [add])
    
    // useEffect(() => {
   
    //     if(apod.date === 'Infinito'){
    //         setDia(1)
    //         return
    //     }
    
    // }, [])
        
    const uid = useSelector(state => state.name.uid)


    const favori = () => {
        
        if(isFav != undefined ){
            Alert.alert(
                "Is already in favorites",
                "Try with another pick",
                [
                  {
                    text: "Ok",
                  },
                ],
                
              );
              return
        }
        if(uid === null){
            dispatch(favoriteOffline({
                title: objFavorito.title,
                copyright: objFavorito.copyright,
                date: objFavorito.date,
                explanation: objFavorito.explanation,
                url: objFavorito.url
            }))
        console.log('añadiendooff')

            
          }else {
            console.log('añadiendo')
            dispatch(favorite({
                title: objFavorito.title,
                copyright: objFavorito.copyright,
                date: objFavorito.date,
                explanation: objFavorito.explanation,
                url: objFavorito.url
            }))


          }

    
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
      


       {    hoy == dia && mesHoy == mes ? null : 

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