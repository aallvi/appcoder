import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { MapaSatelital } from '../vistasRight/MapaSatelital';
import { LocationSelector } from '../vistasRight/LocationSelector';




export const NavigationRight = () => {

  const Stack = createNativeStackNavigator();



    return (
        <>
        <Stack.Navigator>
     


     <Stack.Screen
      name="LocationSelector"
      component={LocationSelector}
      options={{
        title: 'MapaSatelital',
        headerStyle: {
          backgroundColor: '#5E49E2',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:20
        },
        headerShown:false
      }}
      
      />


  </Stack.Navigator>
            
        </>
    )
}
