import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './paginas/login'
import TelaInicio from './paginas/home'
import Galeria from './paginas/galeria'

const Stack = createNativeStackNavigator();

function App(){

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={TelaInicio}/>
        <Stack.Screen name="Galeria" component={Galeria}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;