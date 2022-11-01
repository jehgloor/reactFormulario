import { Text, TextInput, View, StyleSheet } from "react-native";


export default function Formulario(){
    const [dataAgendamento, setDataAgendamento] = useState('')
    const [idPet, setIdPet] = useState('')

    function handleSignIn(){
        const data = {
            dataAgendamento,
            idPet,
        }
        console.log(data);
    }

    return (
        <View style={styles.container}>
            <Text>Bem vindo</Text>
            <TextInput style={styles.input}>
                
            </TextInput>
        </View>
    )

}

const styles = StyleSheet.create ({
    container: {
        alignContent: 'space-between',
        display: 'flex',
        flex: 1,
        alignContent: 'space-between',
        width: '100%'
    }
})
