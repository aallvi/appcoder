import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar } from 'react-native'
import { useSelector } from 'react-redux'
import { NavigationLogin } from './NavigationLogin'
import { TabNavigation } from './TabNavigation'

export const Isloged = () => {

    const logeado = useSelector(state => state.name.logeado)



    return (
        <>
        <NavigationContainer>
         <StatusBar
         backgroundColor='black'
         barStyle='light-content'
         />
              {

                  logeado ? <TabNavigation/> : <NavigationLogin />


              }


        </NavigationContainer>
            
        </>
    )
}
