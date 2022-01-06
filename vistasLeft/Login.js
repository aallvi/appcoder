import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react'
import { Alert, Button, Dimensions, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signUp, invitado } from '../store/actions/name.actions';

// export const image = { uri: "http://papers.co/wallpaper/papers.co-nc27-night-sky-dark-star-lights-tree-nature-bw-dark-4-wallpaper.jpg" }
export const image = { uri: "https://w0.peakpx.com/wallpaper/393/838/HD-wallpaper-space-planets-straes.jpg" }
// const background = { uri: "http://papers.co/wallpaper/papers.co-nc27-night-sky-dark-star-lights-tree-nature-bw-dark-4-wallpaper.jpg" }

export const Login = () => {

  const data = useSelector(state => state.name.data)
 console.log('desdeLogin',data)
   
   

  const navigation = useNavigation()

  const dispatch = useDispatch()


   const {width,height}= useWindowDimensions()


    const [usuario, setUsuario] = useState({
         email:'',
         password:''
    })
   
    const handleChange = (text,campo) => {

        setUsuario({
            ...usuario,
            [campo]: text
        })
        //  console.log(usuario)
    }

    const register = () => {

        const {email,password} = usuario

        dispatch(signIn(email,password))

    //     

    }

    const Logininvitado = () => {

        dispatch(invitado())
    }


    useEffect(() => {
        if(data){
                    Alert.alert(
                      "Email or Password Invalid",
                      "Try again or create a user",
                      [
                        {
                          text: "Ok",
                        },
                      ],
                      
                    );
              }


    }, [data])


    return (

        <ImageBackground 
        
        source={image}
        style={{flex:1,justifyContent:'center',width:width,height:'100%'}}
        
        >
       
        <View style={{alignItems:'center',justifyContent:'center'}} >
        

       
       

        <View style={styles.containerRegistro} >
        

            
        
            <Text style={{marginLeft:47, marginTop:15,marginBottom:15,fontSize:16,color:'yellow'}}>Email</Text>
            <TextInput
            style={styles.input}
            backgroundColor='black'
            placeholder='Spacial Email'
            onChangeText={(text) => handleChange(text,'email')  }
            value={usuario.email}
            autoCapitalize='none'
            placeholderTextColor='grey'
            />
            <Text style={{marginLeft:47, marginTop:15,marginBottom:15,fontSize:16,color:'yellow'}}>Password</Text>
            <TextInput
            style={{...styles.input, marginBottom:20}}
            backgroundColor='black'
            value={usuario.password}
            autoCapitalize='none'
            secureTextEntry
            placeholder='Alien Password'
            placeholderTextColor='grey'
            onChangeText={(text) => handleChange(text,'password')  }
            />
            



            <TouchableOpacity
            style={{backgroundColor:'blue', width:200, alignSelf:'center', borderWidth:0,borderRadius:200,marginTop:10}}
            onPress={()=> register() }
            >
                <Text style={{textAlign:'center',fontSize:17,color:'white'}} >Sign In</Text>
            </TouchableOpacity>
           
          <Text style={{textAlign:'center', marginTop:20, color:'white'}} >¿Don't have a user?</Text>

          <TouchableOpacity onPress={() => navigation.navigate('Register') } >
            <Text style={{textAlign:'center', fontSize:17, marginTop:20, color:'yellow'}} >Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() =>Logininvitado() } >
            <Text style={{textAlign:'center', fontSize:15, marginTop:20, color:'white'}} >Enter as Guest</Text>
          </TouchableOpacity>


          

        </View>

        </View>
        </ImageBackground>

        
    )
}

const styles = StyleSheet.create({
    containerRegistro: {

        width:390,
        height:400 ,
        borderWidth:1,
        borderColor:'yellow',
        borderRadius:10,
        justifyContent:'center',
        backgroundColor:'black',
        
        


    },
    
    input: {
        width:250,
        borderBottomWidth:1,
        borderBottomColor:'white',
        alignSelf:'center',
        color:'white'
        
    }

  });
