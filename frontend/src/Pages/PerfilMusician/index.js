import React from 'react';
import {Feather} from '@expo/vector-icons'
import {View, TouchableOpacity, Text, Image} from 'react-native'

//import api from '../../services/api';

import styles from './styles';
import perfil from '../../assets/Perfilp.png'

export default function PerfilMusician(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {}}>
                    <Feather name='arrow-left' size={26} color='#fff' style={styles.arrow}/>
                </TouchableOpacity>

                <Text style={styles.perfil}>Perfil</Text>

                <TouchableOpacity onPress={() => {}}>
                    <Feather name='edit' size={26} color='#fff' style={styles.edit}/>
                </TouchableOpacity>

            </View>

            <View style={styles.body}>

                <TouchableOpacity style={styles.perfil}>
                    <Image style={styles.imgperfil} source={perfil} />
                </TouchableOpacity>

                <Text style={styles.nametext}>Nome</Text>

                <Text style={styles.agetext}>Idade</Text>

                <Text style={styles.emailtext}>E-mail</Text>
            
                <Text style={styles.citytext}>Cidade</Text>
                
                <Text style={styles.whatsapptext}>Telefone</Text>
                
                <Text style={styles.instrumenttext}>Instrumento</Text>    
                
                <Text style={styles.biotext}>Bio</Text>

                <TouchableOpacity style={styles.btnband}>
                    <Text style={styles.btnBandText}>Banda</Text>
                </TouchableOpacity>
            </View >
        </View>


    )

}