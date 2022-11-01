import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function SearchBar() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.searchInput} placeholder="Digite o n° do pedido"></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: '#f5f5f5',
        borderRadius: 15,
        justifyContent: 'center'
    },
    searchInput: {
        width: '100%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 16
    }
})

