// interface de como vai ser exibido a lista:
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

class ItemListaCliente extends Component {

  render() {
    return (
      <View style={styles.container}>

        <ScrollView>

          <Text style={styles.title}>Cliente</Text>
          <View style={styles.input}>
            <Text style={styles.inputTextChave}>id: </Text>
            <Text style={styles.inputTextValor}>{this.props.data.idCliente}</Text>
          </View>

          <View style={styles.input}>
            <Text style={styles.inputTextChave}>Nome do Cliente: </Text>
            <Text style={styles.inputTextValor}>{this.props.data.nome} </Text>
          </View>

          <View style={styles.input}>
            <Text style={styles.inputTextChave}>Cpf: </Text>
            <Text style={styles.inputTextValor}>{this.props.data.cpf} </Text>
          </View>

          <View style={styles.input}>
            <Text style={styles.inputTextChave}>Endereco: </Text>
            <Text style={styles.inputTextValor}>{this.props.data.endereco} </Text>
          </View>

          <View style={styles.input}>
            <Text style={styles.inputTextChave}>Telefone: </Text>
            <Text style={styles.inputTextValor}>{this.props.data.telefone} </Text>
          </View>

        </ScrollView>

      </View>
    )
  }
}

export default ItemListaCliente;

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

  inputTextChave: {
    fontWeight: 'bold',

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
    color: 'black',
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 15
  }
});
