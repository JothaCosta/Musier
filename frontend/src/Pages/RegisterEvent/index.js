import React from 'react';
import {View, TextInput, TouchableOpacity, Text, Image} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

//import api from '../../services/api'
import styles from './styles';
import perfil from '../../assets/Perfil.png'

export default function RegisterEvent() {

  const navigation = useNavigation();

  function navigateToPerfilMusician(){
      navigation.navigate('PerfilMusician')
  }

  return ( 
    <View style={styles.container}>
        <View style={styles.header}>
        
        <TouchableOpacity style={styles.arrow} onPress={navigateToPerfilMusician}>
          <Feather name='arrow-left' size={23} color='#fff'/>
        </TouchableOpacity>

        <Text style={styles.registerevent}>Evento</Text>
        
      </View>

      <TouchableOpacity style={styles.perfil}>
        <Image style={styles.imgperfil} source={perfil} />
      </TouchableOpacity>

      <Text style={styles.nametext}>Nome</Text>
        <TextInput style={styles.name} placeholder='Nome'/>

      <Text style={styles.citytext}>Cidade</Text>
       <TextInput style={styles.city} placeholder='Cidade'/>

      <Text style={styles.biotext}>Bio</Text>
       <TextInput style={styles.bio} placeholder='Bio'/>

      <Text style={styles.linktext}>Facebbok Link</Text>
       <TextInput style={styles.link} placeholder='Link '/>

       <TouchableOpacity style={styles.btnpublish} onPress={navigateToPerfilMusician}>
        <Text style={styles.btnPublishText}>Publicar</Text>
      </TouchableOpacity>

    </View>
  )
}