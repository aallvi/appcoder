import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from '../vistasLeft/HomeScreen';
import { Login } from '../vistasLeft/Login';




export const NavigationLeft = () => {

  const Stack = createNativeStackNavigator();




    return (
     
    <Stack.Navigator>
     

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Vegan Maps',
          headerStyle: {
            backgroundColor: '#5E49E2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:20
          },
        }}
        
        />


       <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#5E49E2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:20
          },
        }}
        
        />


    </Stack.Navigator>
    
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });