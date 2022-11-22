import React from 'react';

import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './src/componentes/Header';
import Menu from './src/componentes/Menu';
import HomeAgendamento from './src/pages/Agendamento/HomeAgendamento';
import HomeCliente from './src/pages/Cliente/HomeCliente';
import HomePet from './src/pages/Pet/HomePet';
import Footer from './src/componentes/Footer'

//aqui é o que aparece na home
function HomeScreen({ navigation }) {
  return (
    <>
      <View style={styles.homeScreen}>
        <Text style={styles.textHomeScreenBemVindo}>Bem vindo ao PetShop Cão-Peão</Text>
        <Text style={styles.textHomeScreenMenu}>Acesse o menu acima para listar os dados</Text>

      </View>
    </>
  );
}

// aqui foi criado um "combo" para aparecer o header e o menu juntos 
function ComboHeaderMenu(props) {
  return (
    <>
      <Header {...props} />
      <Menu {...props}></Menu>
    </>
  )
}

// chamando a propriedade de navegação: 
const Stack = createNativeStackNavigator();

// aqui é chamada dos menu para navegação. 
function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home', header: (props) => <ComboHeaderMenu {...props} /> }} />
        <Stack.Screen name="HomeCliente" component={HomeCliente} options={{ header: (props) => <ComboHeaderMenu {...props} /> }} />
        <Stack.Screen name="HomeAgendamento" component={HomeAgendamento} options={{ header: (props) => <ComboHeaderMenu {...props} /> }} />
        <Stack.Screen name="HomePet" component={HomePet} options={{ header: (props) => <ComboHeaderMenu {...props} /> }} />
      </Stack.Navigator>
      <Footer email={'caopeao@gmail.com'} phone={'(43)3333-0000'}/>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: '#FDF5E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHomeScreenBemVindo:{
    color:"#6A5ACD",
    fontWeight:'bold',
    fontSize:40,
    lineHeight:50,
    textAlign:'center',
    paddingBottom:70
  },
  textHomeScreenMenu:{
    color:"#4B0082",
    fontSize:20,
    textAlign:'center',
    fontWeight: "bold"
  }
})
