import React, { useEffect, useState }  from 'react'
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableHighlight,TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {Ionicons,FontAwesome} from '@expo/vector-icons'
import { FavPaginador } from './FavPaginador'
import { deleteFav,loadFavs } from '../store/actions/app.actions'

const {width,height} =  Dimensions.get('window')

export const Favorite = () => {



    const favoritos = useSelector(state => state.app.favoritos)

  // if(Object.keys(favoritos).length ===0) return null

    console.log('favoritt',favoritos)

   const componente =
   <View style={{backgroundColor:'black',flex:1,justifyContent:'center'}} >
    <Text style={styles.titulo} > ¡Añade algo espacial a tus favoritos! </Text>
    </View>


const dispatch = useDispatch()
const [count, setCount] = useState(favoritos.length-1)


 useEffect(() => {
    
    dispatch(loadFavs())
    console.log('cargaron')
  }, [])

  
  useEffect(() => {

     setCount(favoritos.length-1)

  }, [favoritos.length])

 
   

  const {title,hdurl,copyright,date,explanation,url} = favoritos[count]


           console.log(favoritos)

           console.log(count)
       
   
    const deletf = () => {
        setCount(count-1)
         dispatch(deleteFav(favoritos[count]))
    }

    return (
        <View style={{backgroundColor:'black',flex:1}} >

       
        
         {
             favoritos.length > 1 ?  
             <>
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
 
           <Text style={{marginTop:1,color:'white', fontSize:20, textAlign:'center'}} > {title}  </Text>
           
           {
           
           favoritos.length > 1 && 
           <FavPaginador data={favoritos} setCount={setCount} count={count} />
           }
           
           <Image
                   
                   source={{ uri:url}}
                   style={styles.image}
                   
           />
           
           {/* Fecha, paginador, copyright */}
          
           <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:8}} >
           <Text style={{color:'white',color:'yellow'}} > {date} </Text>
 
           
 
           <Text style={{color:'white',color:'yellow'}} > {copyright} </Text>
           </View>
  
           </View >
 
 
           
           <View style={{ alignItems:'center',flex:1}} >
           <Text style={{color:'white',marginLeft:8,color:'white',textAlign:'justify',fontSize:13,marginTop:40}} > Descripcion </Text>
           </View>
          
               
             
 
             {/* <Text style={{color:'white'}} >Bienvenido</Text> */}
 
        
         </View>
         </>
          :
          componente
             
         }


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
        width:400,
        height:height *0.6,
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
