import React, { useState, version } from 'react'
import { Text, TextInput, TouchableHighlight, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { resta, suma,aumentaUsuario } from '../store/actions/name.actions'

export const PantallaPrueba = () => {

    

   const numero =  useSelector(state => state.name.num)

    const dispatch =  useDispatch()

    const sumar= () => {
       
        dispatch(suma())

    }
    const restar= () => {
       
        dispatch(resta())
    
    }
    const aumentarfuncion= () => {
       
        dispatch(aumentaUsuario(Number(aumentar)))
    
    }

const [aumentar, setAumentar] = useState(0)

    return (
        <View style={{justifyContent:'center',flex:1}} >
            <Text style={{textAlign:'center', fontSize:30,color:'black'}}>{numero}</Text>

            <View style={{flexDirection:'row', justifyContent:'center'}}>
            <TouchableHighlight
            onPress={sumar}
            >
               
                <Text style={{textAlign:'center', fontSize:30,color:'black'}}> + </Text>
            </TouchableHighlight>
            <TouchableHighlight
            onPress={restar}
            >
                
                <Text style={{textAlign:'center', fontSize:30,color:'black'}}> - </Text>
            </TouchableHighlight>
                    
            </View>

            <TextInput placeholder='en cuanto quieres aumentar el numero' style={{backgroundColor:'white',textAlign:'center',fontSize:20,marginTop:30}}
            
            value={aumentar}
            onChangeText={(text) => setAumentar(text) }
            />

            <TouchableHighlight
            onPress={aumentarfuncion}
            >
                <View style={{alignItems:'center', marginTop:50,justifyContent:'center'}} >
                <Text style={{textAlign:'center', fontSize:30,color:'white', backgroundColor:'blue', width:300, borderRadius:20,}}>Aumenta </Text>
                </View>
                
            </TouchableHighlight>


           
        </View>
    )
}
