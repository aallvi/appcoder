import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from './vistasLeft/HomeScreen';
import { Login } from './vistasLeft/Login';
import { NavigationLeft } from './Navigation/NavigationLeft';
import { TabNavigation } from './Navigation/TabNavigation';

export default function App() {

  // const Stack = createNativeStackNavigator();



  return (
    // <NavigationLeft/>
    <TabNavigation/>
  );
}


