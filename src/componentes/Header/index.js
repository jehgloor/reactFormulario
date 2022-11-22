import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity style={styles.iconeButton} activeOpacity={0.9}>
                    <Image source={require('../../assets/iconeLogo.jpg')} style={styles.buttonImageIconStyle} />
                </TouchableOpacity>
                <View style={styles.containerTextoLogo}>
                    <Text style={styles.textoLogo}>
                        PetShop Cão-Peão
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'darkviolet',
        paddingTop: 44,
        flexDirection: "row",
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 15,
    },
    content: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    iconeButton: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,

    },
    containerTextoLogo: {
        alignItems: 'center',
        flex: 1
    },
    textoLogo: {
        flex: 1,
        fontSize: 18,
        lineHeight: 28,
        fontWeight: "bold",
        color: 'white',
        textAlign: 'center'
    },
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 60,
        width: 60,
        resizeMode: 'stretch',
        borderRadius: 50,
    }
})

