import React, { useEffect, useState }  from 'react'
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableHighlight,TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {Ionicons,FontAwesome} from '@expo/vector-icons'
import { FavPaginador } from './FavPaginador'
import { deleteFav,loadFavs } from '../store/actions/app.actions'
import { Modaldescription } from '../vistasLeft/Modaldescription'
// import { Description } from '../vistasLeft/Description'

const {width,height} =  Dimensions.get('window')

export const Favorite = () => {



    const favoritos = useSelector(state => state.app.favoritos)

  // if(Object.keys(favoritos).length ===0) return null

    console.log('favoritt',favoritos)

  


    const dispatch = useDispatch()
    const [count, setCount] = useState(favoritos.length-1)


  
  useEffect(() => {

     setCount(favoritos.length-1)

  }, [favoritos.length])

 
   

  const {title,copyright,date,explanation,url} = favoritos[count]

   
    const deletf = () => {
        setCount(count-1)
        // console.log('qesale',favoritos[count])
         dispatch(deleteFav(favoritos[count]))
         
    }
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View style={{backgroundColor:'black',flex:1}} >
       <View >
       <Modaldescription explanation={explanation} modalVisible={modalVisible} setModalVisible={setModalVisible} />
       </View>
       
        
         
             
             
             <View style={{justifyContent:'center',marginTop:10, flexDirection:'row'}} >
            
         

             <View style={{ flex:1,justifyContent:'flex-end',marginRight:20,flexDirection:'row'}} >
                 <Text style={{color:'yellow',alignSelf:'center',marginRight:10}} > Quitar de Favs</Text>
             <TouchableOpacity
             onPress={() => deletf()}
             >
             <Ionicons name='star-outline' size={30} color='yellow' />
             </TouchableOpacity>
             </View>

            </View>
             <View style={styles.container}>
        
             
             {/* Titulo e Imagen */}
           <View style={styles.imageContainer} >
 
           <Text style={{marginTop:1,color:'white', fontSize:19, textAlign:'center'}} > {title}  </Text>
           
           {
           
           favoritos.length > 0 && 
           <FavPaginador data={favoritos} setCount={setCount} count={count} />
           }
           
           <TouchableOpacity onPress={() => setModalVisible(true)  }  >
                <Image
                  
                  source={{ uri:url}}
                  style={styles.image}
                  
                 />
              
              </TouchableOpacity>
           
           {/* Fecha, paginador, copyright */}
          
           <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:8}} >
           <Text style={{color:'white',color:'yellow'}} > {date} </Text>
 
           
 
           <Text style={{color:'white',color:'yellow'}} > {copyright} </Text>
           </View>
  
           </View >
 
 
           
           {/* <Description explanation={explanation}  /> */}
          
               
             
 
             {/* <Text style={{color:'white'}} >Bienvenido</Text> */}
 
        
         </View>
       
             
         


     </View>
    )
}

const styles=StyleSheet.create({
    titulo: {
        color:'yellow',
        textAlign:'center', 
        fontSize:20,
        // marginTop:30
    },

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
        marginTop:10,
        alignSelf:'center'
        
      },
  
      imageContainer :{
        // justifyContent:'center',
        marginTop:20,
        // flex:1,
        // alignItems:'center',
        borderRadius:10,
        borderColor:'blueviolet'
      }
})
