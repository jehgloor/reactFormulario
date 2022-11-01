import React from "react";
import { StyleSheet, View } from "react-native";

export default function Screen({ children }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        paddingHorizontal: 15,
        flex: 1,
        justifyContent: "center",
        marginTop: 15,
        marginBottom: 15
    }
})


