import React, { useEffect, useState } from 'react'
import {Ionicons,FontAwesome} from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { atras, favorite } from '../store/actions/app.actions';




export const FavPaginador = ({setCount,data,count}) => {

console.log(data)


    const dispatch = useDispatch()
    


    // console.log('apod',apod)

    const handleBack = () => {
       

        setCount(count-1)
       
    }

  
    
    const handleAdd = () => {
   
        setCount(count+1)

      

    }

 
    return (
        <View style={styles.paginador}>
        
       
        {  data.length >2 && count != 1 &&
         <View style={{flex:1}} >
         <TouchableOpacity
         onPress={( ) => handleBack() }
         >
 
        <Ionicons name='caret-back-outline' size={30} color='blue' />
 
        </TouchableOpacity>

        </View  >
        }

   
    


       { data.length-1 !== count && 
       <View style={{flex:1,alignItems:'flex-end'}}>

      
           <TouchableOpacity
           onPress={( ) => handleAdd() }
           >
   
          <Ionicons name='caret-forward-outline' size={30} color='blue' />
   
          </TouchableOpacity> 
          </View>
       }

            
        </View>
    )
}


const styles = StyleSheet.create({
    paginador:{
        flexDirection:'row',
        // justifyContent:'space-between',
        marginHorizontal:15,
        marginTop:10
    }
})