import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import Header from "../../../componentes/Header";
import Menu from '../../../componentes/Menu';

import { Controller, useForm } from "react-hook-form";
import { Button, TextInput } from "react-native";

import Footer from '../../../componentes/Footer';
import Screen from '../../../componentes/Screen/Screen';

import Constants from 'expo-constants';

export default function PostPet() {
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      nomePet: '',
      dataNascimento: '',
      deficiencia: '',
      especie:''
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
      <View>
            <Text style={styles.title}>Cadastro do Pet</Text>
        </View>
        <View >

          <Text style={styles.label}>Nome do Pet</Text>
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
            name="nomePet"
            rules={{ required: true }}
          />
          <Text style={styles.label}>Data do Nascimento</Text>
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
            name="dataNascimento"
            rules={{ required: true }}
          />
          <Text style={styles.label}>Deficiencia</Text>
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
            name="deficiencia"
            rules={{ required: true }}
          />

      <Text style={styles.label}>Especie</Text>
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
            name="especie"
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
  title: {
    color:'#006335',
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 20
  }
});
