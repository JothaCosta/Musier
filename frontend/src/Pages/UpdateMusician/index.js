import React, {useState} from 'react';
import {Feather} from '@expo/vector-icons'
import {View, TextInput, TouchableOpacity, Text} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import {useNavigation} from '@react-navigation/native'

import api from '../../services/api'

import styles from './styles';



export default function RegisterMusician() {
  const [musician, setMusician] = useState([])
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [instrument, setInstrument] = useState('')
  const [bio, setBio] = useState('')
  const [id, setID] = useState('')
  
  loadinfo();
  async function loadinfo(){
    const id = await AsyncStorage.getItem('id')
      const response = await api.get('/musician/perfil',{
          headers:{
              authorization: id
          }
      })
      setMusician(response.data);
      setID(id)
  }    


  const navigation = useNavigation();


  function navigateToPerfilReturn(){
      navigation.navigate('PerfilMusician')
  }

  async function navigateToPerfil(){

    if(email == ''){
      setEmail(musician.email)
    }
    if(city == ''){
      setCity(musician.city)
    }
    if(whatsapp == ''){
      setWhatsapp(musician.whatsapp)
    }
    if(instrument ==''){
      setInstrument(musician.instrument)
    }
    if(bio ==''){
      setBio(musician.bio)   
    }
    await api.put('/musician', {email, city, whatsapp, instrument, bio},{
                    headers:{
                      authorization: id
                    }})
      
          alert('Salvo com sucesso')

          navigation.navigate('PerfilMusician')
       
 }

  
  return ( 
    <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={navigateToPerfilReturn}>
        <Feather name='arrow-left' size={23} color='#fff'/>
      </TouchableOpacity>

      <Text style={styles.registerText}>Atualizar</Text>
    </View>

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
      onChangeText={setWhatsapp}/>

    <Text style={styles.instrumenttext}>Instrumento</Text>
      <TextInput 
        style={styles.instrument} 
        placeholder='Instrumento'
        value={instrument}
        onChangeText={setInstrument}/>

    <Text style={styles.biotext}>Bio</Text>
      <TextInput 
        style={styles.bio} 
        placeholder='Bio'
        value={bio}
        onChangeText={setBio}/>

    <TouchableOpacity style={styles.btnregister} onPress={navigateToPerfil}>
      <Text style={styles.btnRegisterText}>Salvar</Text>
    </TouchableOpacity>

  </View>
  )
}