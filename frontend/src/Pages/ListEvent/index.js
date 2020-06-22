import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native'
import {Feather} from '@expo/vector-icons'

import styles from './styles';
import perfil from '../../assets/Perfillist.png'


export default function ListEvent() {


  return ( 
      <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => {}}>
                <Feather name='arrow-left' size={26} color='#fff' style={styles.arrow}/>
            </TouchableOpacity>

            <Text style={styles.eventHeader}>Eventos</Text>

          </View>

          <View style={styles.eventList}>
                <View style={styles.event}>
                    <View styles={styles.imgevent}>
                        <Image style={styles.imgperfil} source={perfil}/>
                    </View>
                    <View style={styles.infoevent}>
                        <Text style={styles.nametext}>Nome</Text>   

                        <Text style={styles.citytext}>Cidade</Text>

                        <Text style={styles.biotext}>Bio</Text>
                    </View>
                    <View styles={styles.contactevent}>
                        <TouchableOpacity onPress={() => {}}>
                        <Feather name='facebook' size={33} color='#3b5998' style={styles.facebook}/>
                        </TouchableOpacity>

                    </View>
                    
                    
                </View>
                
          </View>

      </View>
    
   );
}
