import React, {useState} from 'react';
import {Feather} from '@expo/vector-icons'
import {View, TouchableOpacity, Text, Image} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import {useNavigation} from '@react-navigation/native'

import api from '../../services/api';

import styles from './styles';
import perfil from '../../assets/Perfilp.png'

export default function PerfilMusician(){
    const [musician, setMusician] = useState([])


        async function loadinfo(){
            const id = await AsyncStorage.getItem('id')
            const response = await api.get('/musician/perfil',{
                headers:{
                    authorization: id
                }
            })
          setMusician(response.data);
        }

        loadinfo();


    const navigation = useNavigation();

    function navigateToHome(){
        navigation.navigate('Home')
    }

    function navigateToUpdate(){
        navigation.navigate('UpdateMusician')
    }

    function navigateToBand(){
        navigation.navigate('Band')
    }

    function navigateToEvent(){
        navigation.navigate('RegisterEvent')
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateToHome}>
                    <Feather name='arrow-left' size={26} color='#fff' style={styles.arrow}/>
                </TouchableOpacity>

                <Text style={styles.perfil}>Perfil</Text>

                <TouchableOpacity onPress={navigateToUpdate}>
                    <Feather name='edit' size={26} color='#fff' style={styles.edit}/>
                </TouchableOpacity>

            </View>

            <View style={styles.body}>

                <TouchableOpacity style={styles.perfil}>
                    <Image style={styles.imgperfil} source={perfil} />
                </TouchableOpacity>

                <Text style={styles.nametext}>{musician.name}</Text>

                <Text style={styles.agetext}>{musician.age}</Text>

                <Text style={styles.emailtext}>{musician.email}</Text>
            
                <Text style={styles.citytext}>{musician.city}</Text>
                
                <Text style={styles.whatsapptext}>{musician.whatsapp}</Text>
                
                <Text style={styles.instrumenttext}>{musician.instrument}</Text>    
                
                <Text style={styles.biotext}>{musician.bio}</Text>

                <TouchableOpacity style={styles.btnband} onPress={navigateToBand}>
                    <Text style={styles.btnBandText}>Banda</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnevent} onPress={navigateToEvent}>
                    <Text style={styles.btnEventText}>Publicar Evento</Text>
                </TouchableOpacity>
            </View >
        </View>


    )

}