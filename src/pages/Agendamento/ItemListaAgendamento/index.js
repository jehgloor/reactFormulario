// interface de como vai ser exibido a lista:
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

class ItemListaAgendamento extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Agendamento</Text>
          <View style={styles.input}>
            <Text style={styles.inputTextChave}>id: </Text>
            <Text style={styles.inputTextValor}>{this.props.data.idAgendamento}</Text>
          </View>
          <View style={styles.input}>
            <Text style={styles.inputTextChave}>Data: </Text>
            <Text style={styles.inputTextValor}>{this.props.data.data} </Text>
          </View>
          <View style={styles.input}>
            <Text style={styles.inputTextChave}>Id Pet: </Text>
            <Text style={styles.inputTextValor}>{this.props.data.idPet} </Text>
          </View>
          <View style={styles.input}>
            <Text style={styles.inputTextChave}>Id Serviço: </Text>
            <Text style={styles.inputTextValor}>{this.props.data.idServico} </Text>
          </View>


        </ScrollView>
      </View>
    )
  }
}

export default ItemListaAgendamento;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
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
    fontWeight: 'bold',
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
    fontSize: 15,
    marginBottom:10
  }
});
