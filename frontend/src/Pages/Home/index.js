import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native'
import {Feather} from '@expo/vector-icons'

//import api from '../../services/api';

import styles from './styles';
import musician from '../../assets/Musician.png'
import band from '../../assets/Band.png'
import event from '../../assets/Event.png'

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.logout} onPress= {() => {}}>
                    <Feather name='log-out' size={26} color='#fff'/>
                </TouchableOpacity>
                    <Text style={styles.home}>Home</Text>
                <TouchableOpacity style={styles.user} onPress= {() => {}}>
                    <Feather name='user' size={26} color='#fff'/>
                </TouchableOpacity>
                   
            </View>
            <View style={styles.body}>
            <Text style={styles.textmusician}>Encontre Músicos</Text>
            <TouchableOpacity style={styles.musician}>
                <Image style={styles.imgmusician} source={musician}/>
            </TouchableOpacity>

            <Text style={styles.textband}>Encontre Bandas</Text>
            <TouchableOpacity style={styles.band}>
                <Image style={styles.imgband} source={band}/>
            </TouchableOpacity>

            <Text style={styles.textevent}>Encontre Eventos</Text>
            <TouchableOpacity style={styles.event}>
                <Image style={styles.imgevent} source={event}/>
            </TouchableOpacity>
            </View>
        </View>
    )
}