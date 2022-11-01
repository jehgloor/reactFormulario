import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Situation({ data }) {
    const [showValue, setShowValue] = useState(false);
    return (
        <View >
            <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
                <Text style={styles.deliveryDate}>
                    Data prevista para entrega: {data.deliveryDate}
                </Text>
                <View style={styles.content}>
                    <Text style={styles.request}>
                        Pedido N°
                        <Text style={styles.requestNumber}>
                            {' '}{data.requestNumber}
                            {'\n'}Entregue por {data.story}
                        </Text>
                    </Text>
                    {
                        showValue ?
                            (<Text style={data.type === 1 ? (styles.inTime) : data.type === 2 ? (styles.onRoute) : (styles.late)}>{data.situation}</Text>)
                            :
                            (<View style={styles.disable}></View>)
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dadada',
        marginStart: 14,
        marginEnd: 14,
        paddingTop: 5
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    deliveryDate: {
        color: '#787878',
        fontWeight: "bold"
    },
    request: {
        fontSize: 16,
    },
    requestNumber: {
        fontWeight: "bold",
        fontSize: 16,
    },
    late: {
        fontSize: 16,
        color: '#ff0000',
        fontWeight: "bold",
    },
    inTime: {
        fontSize: 16,
        color: '#00ff00',
        fontWeight: "bold"
    },
    onRoute: {
        fontSize: 16,
        color: '#00b200',
        fontWeight: "bold"
    },
    disable: {
        marginTop: 6,
        backgroundColor: '#dadada',
        width: 80,
        height: 10,
        borderRadius: 8
    }
})