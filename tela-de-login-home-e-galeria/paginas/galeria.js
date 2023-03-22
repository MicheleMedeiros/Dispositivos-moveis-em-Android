import * as React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

export default function Galeria({navigation}){
  return (
    <View style={estilos.janela}>
      <View style={estilos.imageGroup}>
        <Image source={require('../assets/image-01.jpg')} style={estilos.img}/>
        <Image source={require('../assets/image-02.jpg')} style={estilos.img}/>
        <Image source={require('../assets/image-03.jpg')} style={estilos.img}/>
      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
  janela:{
    flex: 1,
    background: 'grey'
  },

  imageGroup:{
    display: 'inline-block',
    background: 'grey'
  },

  img:{
    width: 150,
    height: 150,
    margin: 5,
    borderRadius: 6,
    display: 'inline-block',
  }
})
