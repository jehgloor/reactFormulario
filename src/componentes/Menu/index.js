import { View, StyleSheet, Text } from "react-native";

export default function Menu() {
    return (
        <View style={styles.container}>
            <View style={styles.containerTextMenu}>
                <Text style={styles.textMenu}>
                    <Text style={styles.textMenuRastreamento}>
                        Agendamento
                    </Text>
                    {'    '}Pet    Cliente    Serviço     Funcionário
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#108a00',
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
        width: '100%'
    },
    textMenu: {
        color: 'black',
    },
    textMenuRastreamento: {
        backgroundColor: '#fafafaae',
        borderRadius: 10
    }
})