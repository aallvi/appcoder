import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationLogin } from './NavigationLogin';
import { NavigationRight } from './NavigationRight';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {Ionicons,FontAwesome} from '@expo/vector-icons'
import { useSelector } from 'react-redux';
import { NavigationLeft } from './NavigationLeft';
import { Favorite } from '../Favorite/Favorite';

const BottomTabs = createBottomTabNavigator()


export const TabNavigation = () => {

    // const logeado = useSelector(state => state.name.logeado)

    


    return (
        

        
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
                               <Ionicons name='planet-outline' size={24} color={focused ? 'yellow' : 'white'} />
                               <Text style={{color:'white',alignSelf:'center'}}>Hoy</Text>
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
                               <FontAwesome name='space-shuttle' size={24} color={focused ? 'yellow' : 'white'} />
                               <Text style={{color:'white'}}>Mapa Satelital</Text>
                           </View>
                       )
                   
                   }}
       
                   />
                   <BottomTabs.Screen 
                   name="Favorite" 
                   component={Favorite}
                   options={{
                       tabBarIcon: ({focused}) => (
                           <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
                               <Ionicons name='star-outline' size={24} color={focused ? 'yellow' : 'white'} />
                               <Text style={{color:'white'}}>Favoritos</Text>
                           </View>
                       )
                   
                   }}
       
                   />
                   
               </BottomTabs.Navigator>

               

             
    )
}

const styles = StyleSheet.create({
    tabBar: {
       backgroundColor:'black',
       position: 'absolute',
       bottom:0,
    //    left:20,
    //    right:20,
    //    borderRadius:10,
       height:60,
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