import { View, StyleSheet, Text, Button } from "react-native";

export default function Menu(props) {
    const pagina = props.route.name;

    return (
        <View style={styles.container}>
            <View style={styles.containerTextMenu}>
                <Text style={styles.textMenu} onPress={() => props.navigation.navigate('HomeAgendamento')}>
                    Agendamento
                </Text>
                <Text style={styles.textMenu} onPress={() => props.navigation.navigate('HomePet')}>
                    Pet
                </Text>
                <Text style={styles.textMenu} onPress={() => props.navigation.navigate('HomeCliente')}>
                    Cliente
                </Text >
                <Text style={styles.textMenu} onPress={() => props.navigation.navigate('HomeServico')}>
                    Serviço
                </Text>
                <Text style={styles.textMenu}>
                    Funcionário
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'darkviolet',
        flexDirection: "row",
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 10
    },
    containerTextMenu: {
        alignContent: 'space-between',
        display: 'flex',
        flex: 1,
        alignContent: 'space-between',
        width: '100%',
        flexDirection: "row",

    },
    textMenu: {
        color: 'white',
        marginRight: 10,
        fontWeight: 'bold'
    }
})