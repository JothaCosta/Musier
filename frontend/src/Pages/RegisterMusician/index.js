import React from 'react';
import {Feather} from '@expo/vector-icons'
import {View, TextInput, TouchableOpacity, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'


//import api from '../../services/api'
import styles from './styles';


export default function RegisterMusician() {

  const navigation = useNavigation();

  function navigateToLogin(){
      navigation.navigate('Login')
  }
  
  return ( 
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToLogin}>
          <Feather name='arrow-left' size={26} color='#fff'/>
        </TouchableOpacity>

        <Text style={styles.registerText}>Cadastrar</Text>
      </View>

      <Text style={styles.nametext}>Nome</Text>
        <TextInput style={styles.name} placeholder='Nome'/>

      <Text style={styles.agetext}>Idade</Text>
        <TextInput style={styles.age} placeholder='Idade'/>

      <Text style={styles.emailtext}>E-mail</Text>
        <TextInput style={styles.email} placeholder='E-mail'/>

      <Text style={styles.citytext}>Cidade</Text>
       <TextInput style={styles.city} placeholder='Cidade'/>

      <Text style={styles.whatsapptext}>Telefone</Text>
       <TextInput style={styles.whatsapp} placeholder='Telefone'/>

      <Text style={styles.instrumenttext}>Instrumento</Text>
        <TextInput style={styles.instrument} placeholder='Instrumento'/>

      <Text style={styles.passwordtext}>Senha</Text>
        <TextInput style={styles.password} placeholder='Senha'/>

      <Text style={styles.biotext}>Bio</Text>
        <TextInput style={styles.bio} placeholder='Bio'/>

      <TouchableOpacity style={styles.btnregister} onPress={navigateToLogin}>
        <Text style={styles.btnRegisterText}>Cadastrar</Text>
      </TouchableOpacity>

    </View>
  )
}