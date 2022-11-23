import { useEffect, useState } from "react";
import { TouchableOpacity, FlatList, StyleSheet, Text, View, Alert } from "react-native";
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
        <View style={styles.container}>
            <Text style={styles.texto}>HomeCliente</Text>
            <FlatList sytle={styles.list}
                data={getClientes}
                keyExtractor={item => item.idCliente.toString()}
                renderItem={({ item }) => <ItemListaCliente data={item} />}
            />
            <TouchableOpacity style={styles.botao} title="Voltar" onPress={() => navigation.goBack()}>
                <Text style={styles.textoBotao}>
                    Voltar
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeCliente;

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