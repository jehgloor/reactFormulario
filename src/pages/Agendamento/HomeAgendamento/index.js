import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import api from "../../../services/api";
import ItemListaAgendamento from "../ItemListaAgendamento";

function HomeAgendamento({ navigation }) {
  const [getAgendamentos, setAgendamentos] = useState([]);

  useEffect(() => {

    api.get('Agendamento')
      .then(response => setAgendamentos(response.data))
      .catch(error => Alert.alert("Erro ao carregar agendamentos", "Verifique se o servidor está rodando"));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>HomeAgendamento</Text>
      <FlatList sytle={styles.list}
        data={getAgendamentos}
        keyExtractor={item => item.idAgendamento.toString()}
        renderItem={({ item }) => <ItemListaAgendamento data={item} />}
      />
      <TouchableOpacity style={styles.botao} title="Voltar" onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>
        Voltar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeAgendamento;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF5E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color:"#6A5ACD",
    fontSize: 22,
    lineHeight:42,
    fontWeight:"bold"
  },
  botao: {
    marginTop: 30,
    marginBottom: 40,
    backgroundColor: "#6A5ACD",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 6,
  },
  textoBotao:{
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  }
})