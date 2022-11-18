import { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import api from "../../../services/api";
import ItemListaCliente from "../ItemListaCliente";

function HomeCliente({ navigation }) {
    const [getClientes, setClientes] = useState([]);

    useEffect(() => {

        api.get('Cliente')
            .then(response => setClientes(response.data))
            .catch(error => Alert.alert("Erro ao carregar Clientes", "Verifique se o servidor está rodando"));
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>HomeCliente</Text>
            <FlatList sytle={styles.list}
                data={getClientes}
                keyExtractor={item => item.idCliente.toString()}
                renderItem={({ item }) => <ItemListaCliente data={item} />}
            />
            {/* <Button title="Home" onPress={() => navigation.navigate('Home')} /> */}
            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default HomeCliente;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})