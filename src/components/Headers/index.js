
import logo from '../../../assets/iconeLogo.jpg';
import {Image, Text, StyleSheet, View  } from "react-native";


export default function Header({ }){
    return(
        <View style={estilos.headerContainer}>
            <View style={estilos.headerContent}>
                <Image source={logo} style={estilos.headerIconeLogo} />
                <Text style={estilos.headerlogoNome}>  PetShop Cão-Peão </Text>
            </View>      
        </View>
       
    );
};

const estilos = StyleSheet.create({
    headerContainer: {        
        
        backgroundColor: 'darkviolet',
        paddingTop:44,      
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,

      },
      headerContent: {
        
        flexDirection: "row",
        alignItems: "center",
    },
    headerIconeLogo: {
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
  
    },
    headerlogoNome: {
     
        flex: 1,
        fontSize: 18,
        lineHeight:28,
        fontWeight: "bold",
        color: 'white',
        textAlign: 'center'
    },
    // headerTextCarrierName: {
    //     fontSize: 18,
    //     fontWeight: "bold",
    //     color: '#FFFFCC',
    //     textAlign: 'center'
    // },
    // headerButtonImageIconStyle: {
    //     padding: 10,
    //     margin: 5,
    //     height: 60,
    //     width: 60,
    //     resizeMode: 'stretch',
    //     borderRadius: 50,
    // },

});