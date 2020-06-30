import React,{useState} from 'react';
import {Feather} from '@expo/vector-icons'
import {View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, Platform, ScrollView} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import api from '../../services/api'

import styles from './styles';


export default function RegisterMusician() {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [instrument, setInstrument] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio] = useState('')


  const navigation = useNavigation();

  function navigateToLoginReturn(){
    navigation.navigate('Login')
  }

  async function navigateToLogin(){
    if(name == '' ||age == '' ||email == '' ||city == '' ||whatsapp == '' ||instrument == '' ||password == '' ||bio == ''){
        alert('Erro no Cadastro: Verifique suas Informações ')
    }else{
      await api.post('/musician', {name, age, email, city, whatsapp, instrument, password, bio})
    
        alert('Cadastrado com sucesso')

      navigation.navigate('Login')
    }
    
  }
  
  return ( 
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToLoginReturn}>
          <Feather name='arrow-left' size={26} color='#fff'/>
        </TouchableOpacity>

        <Text style={styles.registerText}>Cadastrar</Text>
      </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.nametext}>Nome</Text>
        <TextInput 
          style={styles.name} 
          placeholder='Nome'
          value={name}
          onChangeText={setName}/>

      <Text style={styles.agetext}>Idade</Text>
        <TextInput 
          style={styles.age} 
          placeholder='Idade'
          keyboardType={'numeric'} 
          value={age}
          onChangeText={setAge}/>

      <Text style={styles.emailtext}>E-mail</Text>
        <TextInput 
          style={styles.email} 
          placeholder='E-mail'
          value={email}
          onChangeText={setEmail}/>

      <Text style={styles.citytext}>Cidade</Text>
       <TextInput 
        style={styles.city} 
        placeholder='Cidade'
        value={city}
        onChangeText={setCity}/>

      <Text style={styles.whatsapptext}>Telefone</Text>
       <TextInput 
        style={styles.whatsapp} 
        placeholder='Telefone'
        value={whatsapp}
        keyboardType={'numeric'}
        onChangeText={setWhatsapp}/>

      <Text style={styles.instrumenttext}>Instrumento</Text>
        <TextInput 
          style={styles.instrument} 
          placeholder='Instrumento'
          value={instrument}
          onChangeText={setInstrument}/>

      <Text style={styles.passwordtext}>Senha</Text>
        <TextInput 
          style={styles.password} 
          placeholder='Senha'
          value={password}
          onChangeText={setPassword}/>

      <Text style={styles.biotext}>Bio</Text>
        <TextInput 
          style={styles.bio} 
          placeholder='Bio'
          value={bio}
          onChangeText={setBio}/>
      <TouchableOpacity style={styles.btnregister} onPress={navigateToLogin}>
        <Text style={styles.btnRegisterText}>Cadastrar</Text>
      </TouchableOpacity>
    </ScrollView>

    </KeyboardAvoidingView>
  )
}