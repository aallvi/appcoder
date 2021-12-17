import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from '../vistasLeft/HomeScreen';





export const NavigationLeft = () => {

  const Stack = createNativeStackNavigator();




    return (
     
    <Stack.Navigator initialRouteName='Login' >
     



       <Stack.Screen
        name="Login"
        component={HomeScreen}
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
          headerShown:false
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