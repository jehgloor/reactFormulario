import React from "react";
import { View, StyleSheet, Text } from "react-native";


export default function Menu(props, {}){
    const pagina = props.route.name;

    return(
        <View style={styles.container}>
            <View style={styles.containerTextMenu}>
                <Text style={styles.textMenu} onPress={() => props.navigation.navigate('HomeAgendamento')}>
                    Agendamento
                </Text>
                {/* <Button style={styles.textMenu} title={"Agendamento" + ("HomeAgendamento" == pagina ? "***" : "")}></Button> */}
                <Text style={styles.textMenu}>
                    Pet
                </Text>
                {/* <Button style={styles.textMenu} title={"Cliente" + ("HomeCliente" == pagina ? "***" : "")}></Button> */}
                <Text style={styles.textMenu} onPress={() => props.navigation.navigate('HomeCliente')}>
                    Cliente
                </Text>
                <Text style={styles.textMenu} onPress={() =>props.navigation.navigate('HomeServico')}>
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
        paddingVertical: 10,
        paddingLeft: 10,
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
        fontWeight: "bold",
    },
    textMenuRastreamento: {
        backgroundColor: '#fafafaae',
        borderRadius: 10
    },
    
})