import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export const HomeScreen = () => {


  const navigation = useNavigation()

  const handleLogin = () => {

    navigation.navigate('Login')


  }


    return (
        <View style={styles.container}>
            

            <Button
        title="Logear"
        onPress={() => {handleLogin()} }
         />
            
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
  