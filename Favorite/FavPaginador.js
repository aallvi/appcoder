import React, { useEffect, useState } from 'react'
import {Ionicons,FontAwesome} from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { atras, favorite } from '../store/actions/app.actions';




export const FavPaginador = ({setCount,data,count,setcodeVideo, codeVideo}) => {

// console.log('que es',data)


    // const dispatch = useDispatch()
    

console.log('count',count)
    // console.log('apod',apod)

    const handleBack = () => {
        if( codeVideo != null && codeVideo.length >1){
            setcodeVideo(null)
        }

        setCount(count-1)
       
    }

  
    
    const handleAdd = () => {
        if( codeVideo != null && codeVideo.length >1){
            setcodeVideo(null)
        }
   
        setCount(count+1)

      

    }

 
    return (
        <View style={styles.paginador}>
        
       
        {  data.length >1 && count != 0 &&
         <View style={{flex:1,alignItems:'flex-start'}} >
         <TouchableOpacity
         onPress={( ) => handleBack() }
         >
 
        <Ionicons name='caret-back-outline' size={30} color='white' />
 
        </TouchableOpacity>

        </View  >
        }

   
    


       { data.length-1 !== count && 
       <View style={{flex:1,alignItems:'flex-end'}}>

      
           <TouchableOpacity
           onPress={( ) => handleAdd() }
           >
   
          <Ionicons name='caret-forward-outline' size={30} color='white' />
   
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