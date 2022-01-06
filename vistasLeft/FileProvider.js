import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { Player } from '../Player';

const {width,height} =  Dimensions.get('window')


export const FileProvider = ({url,codeVideo,setcodeVideo,setModalVisible}) => {


    

    useEffect(() => {

        if (url){
            console.log('url',url.split('/'))
            
            const arrayUrl = url.split('/')
    
            if(arrayUrl.length === 5){
                const code = (arrayUrl[4].split('?'))
                // console.log('qeond',code[0])
                setcodeVideo(code[0])
            }
        }

    }, [url])

    console.log('codeee',codeVideo)

    return (
        <>

             {
                 codeVideo ? <Player codeVideo={codeVideo} setModalVisible={setModalVisible} /> : 
                
             <TouchableOpacity onPress={() => setModalVisible(true)  }  >

                 <Image
                  
                  source={{ uri:url}}
                  style={styles.image}
                  
    
                  
                 />

               </TouchableOpacity>
             }

               
            
        </>
    )
}

const styles = StyleSheet.create({
    
    image: {
      width:width* 0.98,
      height:height *0.69,
      alignItems:'center',
      borderRadius:10,
      marginTop:2,
      alignSelf:'center'
      
    },

  });
  