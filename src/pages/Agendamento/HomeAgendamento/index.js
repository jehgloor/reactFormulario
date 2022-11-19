import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import api from "../../../services/api";
import ItemListaAgendamento from "../ItemListaAgendamento";

function HomeAgendamento({ navigation }) {
  const [getAgendamentos, setAgendamentos] = useState([]);

  useEffect(() => {

    api.get('Agendamento')
      .then(response => setAgendamentos(response.data))
      .then(console.log("Carregandop agendamentos: " + getAgendamentos))
      .catch(error => alert("Erro ao carregar agendamentos", "Verifique se o servidor está rodando"));
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomeAgendamento</Text>
      <FlatList sytle={styles.list}
        data={getAgendamentos}
        keyExtractor={item => item.idAgendamento.toString()}
        renderItem={({ item }) => <ItemListaAgendamento data={item} />}
      />
      {/* <Button title="Home" onPress={() => navigation.navigate('Home')} /> */}
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default HomeAgendamento;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})