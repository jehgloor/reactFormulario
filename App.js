import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './src/components/Headers';
import Menu from './src/components/Menu';
import HomeAgendamento from './src/pages/Agendamento/HomeAgendamento';
import HomeCliente from './src/pages/Cliente/HomeCliente';
import HomeServico from './src/pages/Servico/HomeServico';
import { registerRootComponent } from 'expo';
import Footer from './src/components/Footer';

//aqui é o que aparece na home
function HomeScreen({ navigation }) {
  return (
    <>
      <View style={estilos.homeScreen}>
        <Text style={estilos.textHomeScreenBemVindo}>Bem vindo ao PetShop CãoPeão</Text>
        <Text style={estilos.textHomeScreenMenu}>Acesse o menu acima para listar os dados</Text>

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
        <Stack.Screen name="HomeServico" component={HomeServico} options={{ header: (props) => <ComboHeaderMenu {...props} /> }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;


const estilos = StyleSheet.create({
  
  homeScreen: {
    backgroundColor: '#FDF5E6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  
  textHomeScreenBemVindo: {
    color:"#6A5ACD",
    fontWeight: 'bold',
    fontSize: 40,
    lineHeight:50,
    textAlign: 'center',
    paddingBottom: 70,
  },
  textHomeScreenMenu: {
    color: "#4B0082",
    fontSize: 20,
    textAlign: 'center',
    fontWeight: "bold",
  }
});





