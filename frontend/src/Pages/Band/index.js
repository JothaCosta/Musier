import React from 'react';
import {Feather} from '@expo/vector-icons'
import {View, TextInput, TouchableOpacity, Text, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native';

//import api from '../../services/api'
import styles from './styles';
import perfil from '../../assets/Perfil.png'



export default function Band() {

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

        <Text style={styles.registerband}>Banda</Text>

        <TouchableOpacity style={styles.trash} onPress={() => {}}>
          <Feather name='trash-2' size={23} color='#fff'/>
        </TouchableOpacity>
        
      </View>
      
      <TouchableOpacity style={styles.perfil}>
        <Image style={styles.imgperfil} source={perfil} />
      </TouchableOpacity>

      <Text style={styles.nametext}>Nome</Text>
        <TextInput style={styles.name} placeholder='Nome'/>

      <Text style={styles.styletext}>Gênero Musical</Text>
        <TextInput style={styles.style} placeholder='Gênero Musical'/>

      <Text style={styles.biotext}>Bio</Text>
        <TextInput style={styles.bio} placeholder='Bio'/>

      <TouchableOpacity style={styles.btnpublish} onPress={navigateToPerfilMusician}>
        <Text style={styles.btnpublishText}>Publicar</Text>
      </TouchableOpacity>

    </View>
  )
}