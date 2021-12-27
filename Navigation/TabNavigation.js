import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { NavigationLogin } from './NavigationLogin';
import { NavigationRight } from './NavigationRight';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {Ionicons,FontAwesome} from '@expo/vector-icons'
import { useSelector } from 'react-redux';
import { NavigationLeft } from './NavigationLeft';
import { Favorite } from '../Favorite/Favorite';
import { Favportada } from '../Favorite/Favportada';
import { Earth } from '../Earth/Earth';

const BottomTabs = createBottomTabNavigator()
const {width,height} =  Dimensions.get('window')


export const TabNavigation = () => {

    // const logeado = useSelector(state => state.name.logeado)

    


    return (
        

        
               <BottomTabs.Navigator 
               initialRouteName='NavigationLeft'
               screenOptions={{
                   headerShown: false,
                   tabBarStyle:styles.tabBar,
                   tabBarShowLabel:false,
                   
                   
                   }} >
                   
       
                   <BottomTabs.Screen 
                   name="NavigationRight" 
                   component={NavigationRight}
                   options={{
                       tabBarIcon: ({focused}) => (
                           <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
                               <FontAwesome name='space-shuttle' size={24} color={focused ? 'yellow' : 'white'} />
                               <Text style={{color:'white'}}>Satelital Map</Text>
                           </View>
                       )
                   
                   }}
       
                   />


                  <BottomTabs.Screen 
                   name="NavigationLeft" 
                   component={NavigationLeft}
                   options={{
                       tabBarIcon: ({focused}) => (
                           <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
                               <Ionicons name='planet-outline' size={24} color={focused ? 'yellow' : 'white'} />
                               <Text style={{color:'white',alignSelf:'center'}}>Today</Text>
                           </View>
                       )
                   
                   }}
                   
                   />


                  <BottomTabs.Screen 
                   name="Earth" 
                   component={Earth}
                   options={{
                       tabBarIcon: ({focused}) => (
                           <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
                               <Ionicons name='earth-outline' size={24} color={focused ? 'yellow' : 'white'} />
                               <Text style={{color:'white'}}>Earth</Text>
                           </View>
                       )
                   
                   }}
       
                   />




                   <BottomTabs.Screen 
                   name="Favportada" 
                   component={Favportada}
                   options={{
                       tabBarIcon: ({focused}) => (
                           <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
                               <Ionicons name='star-outline' size={24} color={focused ? 'yellow' : 'white'} />
                               <Text style={{color:'white'}}>Favorites</Text>
                           </View>
                       )
                   
                   }}
       
                   />
                  
                   
               </BottomTabs.Navigator>

               

             
    )
}

const styles = StyleSheet.create({
    tabBar: {
    //    flexDirection:'row',
       backgroundColor:'black',
       marginLeft:10,
       alignItems:'center',
       width:width,
       position: 'absolute',
    //    marginLeft:10,
       bottom:0,
    //    left:20,
    //    right:20,
    //    borderRadius:10,
       height:65,
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