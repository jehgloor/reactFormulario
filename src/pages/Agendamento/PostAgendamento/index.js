import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import Header from "../../../componentes/Header";
import Menu from '../../../componentes/Menu';

import { Controller, useForm } from "react-hook-form";
import { Button, TextInput } from "react-native";

import Footer from '../../../componentes/Footer';
import Screen from '../../../componentes/Screen/Screen';

import Constants from 'expo-constants';

export default function PostAgendamento() {
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      dataAgendamento: '',
      horaAgendamento: '',
      idPet: '',
      idServico:''
    }
  });
  const onSubmit = data => {
    console.log(data);
  };

  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  console.log('errors', errors);

  return (
    <View style={styles.container}>
      <Header carrierName={"Pet Shop CãoPeão"} />
      <Menu />
      <Screen>
        <View >

          <Text style={styles.label}>Data do Agendamento</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="dataAgendamento"
            rules={{ required: true }}
          />
          <Text style={styles.label}>Hora do Agendamento</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="hora"
            rules={{ required: true }}
          />
          <Text style={styles.label}>Id Pet</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="idPet"
            rules={{ required: true }}
          />

      <Text style={styles.label}>Id Servico</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="idServico"
            rules={{ required: true }}
          />
          <View style={styles.button}>
            <Button
              style={styles.buttonInner}
              color
              title="Cadastrar"
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </View>
      </Screen>
      <Footer phone={"(55) 3333-0000"} email={"petshopvivafeliz@gmail.com.br"}></Footer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: 'white',
    margin: 0,
    padding: 0
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
  label: {
    color: 'black',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: 'black',
    borderRadius: 4,
  },
  input: {
    backgroundColor: '#d3d3d3',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
