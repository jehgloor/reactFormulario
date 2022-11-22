import { useEffect, useState } from "react";
import { Alert, TouchableOpacity, FlatList, StyleSheet, Text, View } from "react-native";
import api from "../../../services/api";
import ItemListaPet from "../ItemListaPet";


function HomePet({ navigation }) {
  const [getPets, setPets] = useState([]);

  useEffect(() => {
  
    api.get('Pet')
      .then((response) => setPets(response.data))
      .catch((error) => Alert.alert(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>HomePet</Text>
      <FlatList sytle={styles.list}
        data={getPets}
        keyExtractor={({idPet}, index ) => idPet}
        renderItem={({ item }) => <ItemListaPet data={item} />}
      />
     <TouchableOpacity style={styles.botao} title="Voltar" onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>
        Voltar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomePet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF5E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color:"#6A5ACD",
    fontSize: 22,
    lineHeight:42,
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
  textoBotao:{
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  }
})