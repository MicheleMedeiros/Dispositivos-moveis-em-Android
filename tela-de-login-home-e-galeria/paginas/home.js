import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


export default function Home({navigation}){
  return (
    <View style={estilos.janela}>
      <Text style={estilos.title}>Tela Inicial</Text>
      <Button style={estilos.button} title="Ir para Galeria" onPress={()=>navigation.navigate('Galeria')}/>
    </View>
  )
}

const estilos = StyleSheet.create({

  janela:{
    flex: 1,
    alignSelf: 'center',
  },

  title:{
    alignSelf: 'center',
    margin: '10px',
    fontSize: '20px'
  },

  button:{
    borderRadius: '20px',
    backgroundColor: '#04436b',
  }

})
