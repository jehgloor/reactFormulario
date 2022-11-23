import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Text, View, StyleSheet } from "react-native";
//import estilos from '../../estilo/Estilo';

export default function Footer({ email, phone }) {
    return (
        <View style={estilos.footerContainer}>
            <View style={estilos.footerContainerEmail}>
                
                    <MaterialIcons name="email" size={24} color="white" />
                    <Text style={estilos.footerEmail}>{email}</Text>
                
            </View>
            <View style={estilos.footerContainerPhone}>
                
                    <Feather name="phone" size={24} color="white" />
                    <Text style={estilos.footerPhone}> {phone}</Text>
                
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    footerContainer: {
        width: "100%",
        backgroundColor: 'darkviolet',
        marginTop:46,
        paddingTop: 30,
        flexDirection: "row",
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 16,
        justifyContent: "space-between",
    },
    footerEmail: {
        fontSize: 12,
        marginStart: 10,
        color: 'white',
    },
    footerPhone: {
        fontSize: 12,
        marginLeft: 10,
        color: 'white',
    },
    footerContainerEmail: {
        flexDirection: "row",
    },
    footerContainerPhone: {
        flexDirection: "row",
    }
      });

