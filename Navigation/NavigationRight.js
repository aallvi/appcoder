import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { PantallaPrueba } from '../vistasRight/PantallaPrueba';




export const NavigationRight = () => {

  const Stack = createNativeStackNavigator();



    return (
        <>
        <Stack.Navigator>
     


     <Stack.Screen
      name="PantallaPrueba"
      component={PantallaPrueba}
      options={{
        title: 'PantallaPrueba',
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
            
        </>
    )
}
