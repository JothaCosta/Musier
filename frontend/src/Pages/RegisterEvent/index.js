import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text, Image} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

import api from '../../services/api'

import styles from './styles';
import perfil from '../../assets/Perfil.png'

export default function RegisterEvent() {

  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [bio, setBio] = useState('')
  const [facebook, setFacebook] = useState('')

  const navigation = useNavigation();

  function navigateToPerfilMusicianReturn(){
      navigation.navigate('PerfilMusician')
  }

  async function navigateToPerfilMusician(){
    if(name == '' ||city == '' ||bio == '' || facebook == ''){
      alert('Erro no Cadastro: Verifique as Informações ')
    }else{
      await api.post('/event', {name, city, bio, facebook})
    
        alert('Cadastrado com sucesso')
      navigation.navigate('PerfilMusician')
    }
  }

  return ( 
    <View style={styles.container}>
        <View style={styles.header}>
        
        <TouchableOpacity style={styles.arrow} onPress={navigateToPerfilMusicianReturn}>
          <Feather name='arrow-left' size={23} color='#fff'/>
        </TouchableOpacity>

        <Text style={styles.registerevent}>Evento</Text>
        
      </View>

      <TouchableOpacity style={styles.perfil}>
        <Image style={styles.imgperfil} source={perfil} />
      </TouchableOpacity>

      <Text style={styles.nametext}>Nome</Text>
       <TextInput 
        style={styles.name} 
        placeholder='Nome'
        value={name}
        onChangeText={setName}/>

      <Text style={styles.citytext}>Cidade</Text>
       <TextInput 
        style={styles.city} 
        placeholder='Cidade'
        value={city}
        onChangeText={setCity}/>

      <Text style={styles.biotext}>Bio</Text>
       <TextInput 
        style={styles.bio} 
        placeholder='Bio'
        value={bio}
        onChangeText={setBio}/>

      <Text style={styles.linktext}>Facebook Link</Text>
       <TextInput 
        style={styles.link} 
        placeholder='Link'
        value={facebook}
        onChangeText={setFacebook}/>

       <TouchableOpacity style={styles.btnpublish} onPress={navigateToPerfilMusician}>
        <Text style={styles.btnPublishText}>Publicar</Text>
      </TouchableOpacity>

    </View>
  )
}