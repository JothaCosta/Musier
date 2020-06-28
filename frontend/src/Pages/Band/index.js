import React, {useState} from 'react';
import {Feather} from '@expo/vector-icons'
import {View, TextInput, TouchableOpacity, Text, Image} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api'

import styles from './styles';
import perfil from '../../assets/Perfil.png'



export default function Band() {
  const [name, SetName] = useState('');
  const [style, setStyle] = useState('');
  const [bio, setBio] = useState('');

  const navigation = useNavigation();

  function navigateToPerfilMusicianReturn(){
      navigation.navigate('PerfilMusician')
  }

  async function navigateToPerfilMusician(){
    const id = await AsyncStorage.getItem('id')
    if(name == ''|| style == '' ||bio == ''){
      alert('Erro no Cadastro: Verifique as Informações ')
    }else{
     await api.post('/band', {name,style, bio},{
                        headers:{
                           authorization: id 
                        }
                    })
  
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

        <Text style={styles.registerband}>Banda</Text>

        <TouchableOpacity style={styles.trash} onPress={() => {}}>
          <Feather name='trash-2' size={23} color='#fff'/>
        </TouchableOpacity>
        
      </View>
      
      <TouchableOpacity style={styles.perfil}>
        <Image style={styles.imgperfil} source={perfil} />
      </TouchableOpacity>

      <Text style={styles.nametext}>Nome</Text>
        <TextInput 
          style={styles.name} 
          placeholder='Nome'
          value={name}
          onChangeText={SetName}/>

      <Text style={styles.styletext}>Gênero Musical</Text>
        <TextInput 
          style={styles.style} 
          placeholder='Gênero Musical'
          value={style}
          onChangeText={setStyle}/>

      <Text style={styles.biotext}>Bio</Text>
        <TextInput 
          style={styles.bio} 
          placeholder='Bio'
          value={bio}
          onChangeText={setBio}/>

      <TouchableOpacity style={styles.btnpublish} onPress={navigateToPerfilMusician}>
        <Text style={styles.btnpublishText}>Publicar</Text>
      </TouchableOpacity>

    </View>
  )
}