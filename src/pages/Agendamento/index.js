import React from 'react';
import { View, Text, StyleSheet, FlatList } from "react-native";
import Header from "../../componentes/Header";
import Menu from '../../componentes/Menu';

import SearchBar from '../../componentes/SeachBar';
import Screen from '../../componentes/Screen/Screen';
import Situation from '../../componentes/Situation';
import Footer from '../../componentes/Footer';

const list = [
  {
    id: 1,
    requestNumber: '1256',
    story: 'Netshoes',
    situation: 'atrasado',
    deliveryDate: '25/09/2022',
    type: 0,
  },
  {
    id: 2,
    requestNumber: '6987.2',
    story: 'Vale Verde',
    situation: 'entregue',
    deliveryDate: '25/09/2022',
    type: 1,
  },
  {
    id: 3,
    requestNumber: '458126',
    story: 'Madeira Madeira',
    situation: 'em rota',
    deliveryDate: '30/09/2022',
    type: 2,
  },
  {
    id: 4,
    requestNumber: '569874.4589',
    story: 'Kalunga',
    situation: 'atrasado',
    deliveryDate: '23/09/2022',
    type: 0,
  },
  {
    id: 5,
    requestNumber: '56982',
    story: 'Shein',
    situation: 'entregue',
    deliveryDate: '25/09/2022',
    type: 1,

  },
  {
    id: 6,
    requestNumber: '36521',
    story: 'Kabum',
    situation: 'em rota',
    deliveryDate: '30/09/2022',
    type: 2,

  },
  {
    id: 7,
    requestNumber: '415985',
    story: 'Bolsas July',
    situation: 'em rota',
    deliveryDate: '02/10/2022',
    type: 2,
  },
  {
    id: 8,
    requestNumber: '025639',
    story: 'Livraria',
    situation: 'entregue',
    deliveryDate: '21/09/2022',
    type: 1,

  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header carrierName={"Pet Shop CãoPeão"} />
      <Menu />
      <Screen>
        <View >
          
        </View>
        <FlatList sytle={styles.list}
          data={list}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Situation data={item} />}
        />
      </Screen>
      <Footer phone={"(55) 3333-0000"} email={"petshopvivafeliz@gmail.com.br"}></Footer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 0,
    padding: 0
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});


