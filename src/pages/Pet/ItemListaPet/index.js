// interface de como vai ser exibido a lista:
import React, {Component} from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";

class ItemListaPet extends Component{

    render(){
        return(
            <View style={styles.container}>
          
            <ScrollView>

                <Text style={styles.title}>Pet</Text>
                <View style={styles.input}>
                  <Text style={styles.inputTextChave}>id: </Text>   
                  <Text style={styles.inputTextValor}>{this.props.data.idPet}</Text>  
                </View>
                <View style={styles.input}>
                  <Text style={styles.inputTextChave}>Nome: </Text>
                  <Text style={styles.inputTextValor}>{this.props.data.nomePet} </Text>
                </View>
                <View style={styles.input}>
                  <Text style={styles.inputTextChave}>Id do dono: </Text>
                  <Text style={styles.inputTextValor}>{this.props.data.idCliente} </Text>
                </View>
                <View style={styles.input}>
                  <Text style={styles.inputTextChave}>Especie: </Text>
                  <Text style={styles.inputTextValor}>{this.props.data.especie} </Text>
                </View>
                <View style={styles.input}>
                  <Text style={styles.inputTextChave}>Deficiencia: </Text>
                  <Text style={styles.inputTextValor}>{this.props.data.deficiencia.toString()} </Text>
                </View>
                <View style={styles.input}>
                  <Text style={styles.inputTextChave}>Nascimento: </Text>
                  <Text style={styles.inputTextValor}>{this.props.data.nascimento} </Text>
                </View>
            </ScrollView>
            
            </View>
        )
    }
}

export default ItemListaPet;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      //paddingTop: Constants.statusBarHeight,
      padding: 8,
      backgroundColor: 'white',
      margin: 10,
      padding: 10
    },
    list: {
      marginStart: 14,
      marginEnd: 14,
    },
    label: {
      color: 'black',
      margin: 20,
      marginLeft: 0,
    },
    button: {
      marginTop: 40,
      color: 'white',
      height: 40,
      backgroundColor: 'black',
      borderRadius: 4,
    },
    inputTextChave: {
       fontWeight:'bold',

    },
    inputTextValor: {
       
    },
    input: {
    backgroundColor: '#e7e7e7',
    borderColor: 'black',
        height: 40,
        padding: 10,
        borderRadius: 4, 
        flexDirection: 'row',
    },
    title: {
      color:'black',
      textAlign: 'center',
      fontWeight: "bold",
      fontSize: 15
    }
  });
