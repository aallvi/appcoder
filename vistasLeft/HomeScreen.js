import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/actions/name.actions';

export const HomeScreen = () => {

  const dispatch = useDispatch()

  const logeado = useSelector(state => state.name.logeado)
  

  console.log('logeadoenHome',logeado)

  

const handleLogout = () => {
    
  dispatch(logout())

}

    return (
        <View style={styles.container}>
            

            <Text>Bienvenido</Text>

            <TouchableOpacity style={{marginTop:30}}
            
            onPress={() => handleLogout() }

            >
              <Text style={{fontSize:30, color:'red'}} >Cerrar Sesion</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  