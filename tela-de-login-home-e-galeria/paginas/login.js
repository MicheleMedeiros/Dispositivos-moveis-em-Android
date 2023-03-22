import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, SafeAreaView} from 'react-native';


function Login({navigation}){

  return (
    <View style={estilos.janela}>
      <View style={estilos.containerLogin}>
        <Image source={require('../assets/logo-estacio.png')} style={estilos.logo}/>
        <Text style={estilos.titulo}>Tela de Login</Text>

        <View style={estilos.usuario}>
          <Image source={require('../assets/icon-usuario.png')} style={estilos.logoIcon}/>
          <TextInput style={estilos.camposTexto} placeholder={'usuario'}></TextInput>
        </View>

        <View style={estilos.senha}>
          <Image source={require('../assets/icon-senha.png')} style={estilos.logoIcon}/>
          <TextInput style={estilos.camposTexto} placeholder={'senha'}></TextInput>
        </View>

        <View style={estilos.botao}>
          <Button title={'Acessar'} style={estilos.acessar} onPress={()=>navigation.navigate('Home')}/>
        </View>

      <SafeAreaView style={estilos.textLinks}>
        <View>
          <Text>
            <Text style={estilos.textLinks} onPress={() => {
                Linking.openURL('https://reactnative.dev');
              }}>
              Esqueceu Senha
            </Text>
          </Text>
          <Text>
            <Text style={estilos.textLinks} onPress={() => {
                Linking.openURL('https://reactnative.dev');
              }}>
              Cadastre-se
            </Text>
          </Text>
        </View>
      </SafeAreaView>

    </View>
  </View>
   
  );


}


const estilos = StyleSheet.create({

  janela:{
    flex: 1,
    background:'white'
  },

  containerLogin:{
    width: '90%',
    height: '80%',
    backgroundColor: '#04436b',
    marginLeft: '20px',
    marginrRigth: '20px',
    borderRadius: '10px',
    marginTop: '30px'
  },

  titulo:{
    alignSelf: 'center',
    fontSize: '20px',
    marginTop: '10px',
    marginBottom: '10px',
    color: 'white',
    fontFamily:''
  },

  logo:{
    width:'50%',
    height: '20%',
    alignSelf: 'center',
    borderRadius: '6px'
  },

  camposTexto:{
    width: '90%',
    border: '1px solid white',
    margin: '10px',
    borderRadius: '5px',
    padding: '10px',
    fontSize: '15px',
    color: 'white',
    alignSelf: 'center',
  },

  botao:{
    width: '50%',
    marginTop: '20px',
    alignSelf: 'center',
  },

  acessar:{
    borderRadius: '5px'
  },

  usuario:{
    flexDirection: 'row',
  },

  senha:{
    flexDirection: 'row',
  },

  logoIcon:{
    width:'20%',
    height: '60%',
    alignSelf: 'center',
    resizeMode: 'contain',
  }, 

  textLinks:{
    marginTop: '10px',
    marginLeft: '10px',
    color: 'white',
  }


})

export default Login;
