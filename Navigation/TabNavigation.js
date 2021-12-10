import React from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationLogin } from './NavigationLogin';
import { NavigationRight } from './NavigationRight';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons'
import { PantallaPrueba } from '../vistasRight/PantallaPrueba';
import { useSelector } from 'react-redux';
import { Login } from '../vistasLeft/Login';
import { NavigationLeft } from './NavigationLeft';

const BottomTabs = createBottomTabNavigator()


export const TabNavigation = () => {

    const logeado = useSelector(state => state.name.logeado)



    return (
        <NavigationContainer>

            {
               
               logeado ? 

               <BottomTabs.Navigator 
               screenOptions={{
                   headerShown: false,
                   tabBarStyle:styles.tabBar,
                   tabBarShowLabel:false
                   
                   }} >
       
                   <BottomTabs.Screen 
                   name="NavigationLeft" 
                   component={NavigationLeft}
                   options={{
                       tabBarIcon: ({focused}) => (
                           <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
                               <Ionicons name='md-home' size={24} color={focused ? 'blue' : 'black'} />
                               <Text style={{color:'black',alignSelf:'center'}}>Vegan</Text>
                           </View>
                       )
                   
                   }}
                   
                   />
                   
       
                   <BottomTabs.Screen 
                   name="NavigationRight" 
                   component={NavigationRight}
                   options={{
                       tabBarIcon: ({focused}) => (
                           <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
                               <Ionicons name='ios-cart-sharp' size={24} color={focused ? 'blue' : 'black'} />
                               <Text style={{color:'black'}}>Config</Text>
                           </View>
                       )
                   
                   }}
       
                   />
                   
               </BottomTabs.Navigator>

               :

               <NavigationLogin />


            }


       
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    tabBar: {
       position: 'absolute',
       bottom:25,
       left:20,
       right:20,
       borderRadius:10,
       height:80,
       shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,

        elevation: 19,

    }
})