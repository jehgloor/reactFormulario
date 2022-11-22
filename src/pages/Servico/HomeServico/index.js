import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import api from "../../../services/api";
import ItemListaServico from '../ItemListaServico';

function HomeServico({ navigation }) {
  const [getServico, setServico] = useState([]);

  useEffect(() => {

    api.get('Servico')
      .then(response => setServico(response.data))
      .catch(error => Alert.alert("Erro ao carregar serviços", "Verifique se o servidor está rodando"));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>HomeServico</Text>
      <FlatList sytle={styles.list}
        data={getServico}
        keyExtractor={item => item.idServico.toString()}
        renderItem={({ item }) => <ItemListaServico data={item} />}
      />
      <TouchableOpacity style={styles.botao} title="Voltar" onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>
          Voltar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeServico;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF5E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: "#6A5ACD",
    fontSize: 22,
    lineHeight: 42,
    fontWeight: "bold",
  },
  botao: {
    marginTop: 30,
    marginBottom: 40,
    backgroundColor: "#6A5ACD",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  }
})