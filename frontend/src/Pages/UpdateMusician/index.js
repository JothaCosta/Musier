import React from 'react';
import {Feather} from '@expo/vector-icons'
import {View, TextInput, TouchableOpacity, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'

//import api from '../../services/api'
import styles from './styles';


export default function RegisterMusician() {

  const navigation = useNavigation();

  function navigateToPerfil(){
      navigation.navigate('PerfilMusician')
  }

  
  return ( 
    <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={navigateToPerfil}>
        <Feather name='arrow-left' size={23} color='#fff'/>
      </TouchableOpacity>

      <Text style={styles.registerText}>Atualizar</Text>
    </View>

    <Text style={styles.emailtext}>E-mail</Text>
      <TextInput style={styles.email} placeholder='E-mail'/>

    <Text style={styles.citytext}>Cidade</Text>
     <TextInput style={styles.city} placeholder='Cidade'/>

    <Text style={styles.whatsapptext}>Telefone</Text>
     <TextInput style={styles.whatsapp} placeholder='Telefone'/>

    <Text style={styles.instrumenttext}>Instrumento</Text>
      <TextInput style={styles.instrument} placeholder='Instrumento'/>

    <Text style={styles.biotext}>Bio</Text>
      <TextInput style={styles.bio} placeholder='Bio'/>

    <TouchableOpacity style={styles.btnregister} onPress={navigateToPerfil}>
      <Text style={styles.btnRegisterText}>Salvar</Text>
    </TouchableOpacity>

  </View>
  )
}