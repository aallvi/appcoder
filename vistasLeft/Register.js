import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react'
import { Alert, Button, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clean, signUp } from '../store/actions/name.actions';
import validator from 'validator';
import { image } from './Login';


export const Register = () => {
   

  const user = useSelector(state => state.name.registrado)
  const dataRegister = useSelector(state => state.name.dataRegister)

  console.log('user',user)
  console.log('dataRegister',dataRegister)

  const navigation = useNavigation()

  const dispatch = useDispatch()


//  console.log(user)
    const [usuario, setUsuario] = useState({
        
         email:'',
         password:''
    })

  const [repeatPassword, setRepeatPassword] = useState('')
    
   
    const handleChange = (text,campo) => {

        setUsuario({
            ...usuario,
            [campo]: text
        })
        //  console.log(usuario)
    }

    useEffect(() => {

      if(dataRegister){
              Alert.alert(
                "Email already exist",
                "Try again or create a user",
                [
                  {
                    text: "Ok",
                  },
                ],
                
              );
        }

      
    }, [dataRegister])

    const register = () => {
        const {email,password} = usuario

        if (email.trim().length === 0){

            Alert.alert(
                "Ingresa Email valido",
                "Vuelva a ingresar su Email",
                [
                 
                  { text: "OK"}
                ]
              );
                     return

            
        } else if (!validator.isEmail(email)){
            Alert.alert(
                "Ingresa Email valido",
                "Vuelva a ingresar su Email",
                [
                 
                  { text: "OK"}
                ]
              );
                     return
        }else if(  password.length < 6){
            Alert.alert(
                "Password debe ser al menos 6 caracteres",
                "Reescribe las claves",
                [
                 
                  { text: "OK"}
                ]
              )
            return

        }
         else if (repeatPassword !== password ) {
            Alert.alert(
                "Password deben ser iguales  y may",
                "Reescribe las claves",
                [
                 
                  { text: "OK"}
                ]
              )
            return
        } 


        dispatch(signUp(email,password))
        
    //     

    }

    const cleanRegister = () => {
      dispatch(clean())
      navigation.navigate('Login')

    }


    return (

        <ImageBackground 
        
        source={image}
        style={{flex:1,justifyContent:'center'}}
        resizeMode="cover"
        >
        
            

        <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
       

        <View style={styles.containerRegistro} >

            {
                
                user ?
                <>
                <Text style={{textAlign:'center', fontSize:17}} > ¡Good Trip!  </Text>

                <TouchableOpacity 
                
                onPress={ () => cleanRegister()}

                >
                    <Text style={{textAlign:'center', fontSize:20, color:'green', marginTop:20}} >Sign In</Text>
                </TouchableOpacity>

                </>

                :  

                <>

            <Text style={{marginLeft:47, marginTop:15,marginBottom:15,fontSize:16}}>Email</Text>
            <TextInput
            style={styles.input}
            backgroundColor='white'
            placeholder='Your Intergalactic Email'
            onChangeText={(text) => handleChange(text,'email')  }
            value={usuario.email}
            autoCapitalize='none'
            />
            <Text style={{marginLeft:47, marginTop:15,marginBottom:15,fontSize:16}}>Password</Text>
            <TextInput
            style={{...styles.input, marginBottom:20}}
            backgroundColor='white'
            value={usuario.password}
            autoCapitalize='none'
            secureTextEntry
            placeholder='Your Intergalactic Password'
            onChangeText={(text) => handleChange(text,'password')  }
            />

            <Text style={{marginLeft:47, marginTop:15,marginBottom:15,fontSize:16}}> Repeat Password</Text>
            <TextInput
            style={{...styles.input, marginBottom:20}}
            backgroundColor='white'
            value={repeatPassword}
            autoCapitalize='none'
            secureTextEntry
            placeholder='Password again'
            onChangeText={(text) => setRepeatPassword(text)  }
            />

            {/* <Button
            
            title='Registrase'
            onPress={()=> console.log(usuario) }
            
            /> */}


            <TouchableOpacity
            style={{backgroundColor:'blue', width:200, alignSelf:'center', borderWidth:0,borderRadius:200,marginTop:10}}
            onPress={()=> register() }
            >
                <Text style={{textAlign:'center',fontSize:17,color:'white'}} >Register</Text>
            </TouchableOpacity>


            <Text style={{textAlign:'center', marginTop:20}} >¿Already have user?</Text>

            <TouchableOpacity
            style={{marginTop:20}}
            onPress={()=> navigation.navigate('Login') }
            >
                <Text style={{textAlign:'center',fontSize:17,color:'blue'}} >Sign In</Text>
            </TouchableOpacity>




                </>
              
            }
        
           


        </View>
            
        </View>
       
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    containerRegistro: {

        width:390,
        height:440 ,
        borderWidth:2,
        borderColor:'black',
        borderRadius:10,
        justifyContent:'center',
        backgroundColor:'white',
        
    

    },
    
    input: {
        width:250,
        borderBottomWidth:1,
        borderBottomColor:'black',
        alignSelf:'center'
    }

  });
