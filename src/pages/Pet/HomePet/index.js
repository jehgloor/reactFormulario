import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import api from "../../../services/api";
import ItemListaPet from "../ItemListaPet";


function HomePet({ navigation }) {
  const [getPets, setPets] = useState([]);

  useEffect(() => {
  
    api.get('Pet')
      .then((response) => setPets(response.data))
      .then((response) => console.log("Carregando pets: "+ response.data))
      .catch((error) => alert("Erro ao carregar pets. Verifique se o servidor está rodando"));
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>HomePet</Text>
      <FlatList sytle={styles.list}
        data={getPets}
        keyExtractor={({idPet}, index ) => idPet}
        renderItem={({ item }) => <ItemListaPet data={item} />}
      />
      {/* <Button title="Home" onPress={() => navigation.navigate('Home')} /> */}
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default HomePet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})