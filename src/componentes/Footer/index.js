import { Feather, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from "react-native";

export default function Footer({ email, phone }) {
    return (
        <View style={styles.container}>
            <View style={styles.containerEmail}>
                <MaterialIcons name="email" size={24} color="black" />
                <Text style={styles.email}>{email}</Text>
            </View>
            <View style={styles.containerPhone}>
                <Feather name="phone" size={24} color="black" />
                <Text style={styles.phone}> {phone}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#108a00',
        paddingTop: 30,
        flexDirection: "row",
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 15,
        justifyContent: "space-between",
    },
    email: {
        fontSize: 12,
        marginStart: 10,
        color: 'white',
    },
    phone: {
        fontSize: 12,
        marginStart: 10,
        color: 'white',
    },
    containerEmail: {
        flexDirection: "row",
    },
    containerPhone: {
        flexDirection: "row",
    }
})
