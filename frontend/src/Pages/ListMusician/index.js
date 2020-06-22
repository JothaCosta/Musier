import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native'
import {Feather} from '@expo/vector-icons'

import styles from './styles';
import perfil from '../../assets/Perfillist.png'
import whatsapp from '../../assets/whatsapp.png'
import gmail from '../../assets/gmail.png'

export default function ListMusician() {


  return ( 
      <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => {}}>
                <Feather name='arrow-left' size={26} color='#fff' style={styles.arrow}/>
            </TouchableOpacity>

            <Text style={styles.musicianHeader}>Músicos</Text>

          </View>

          <View style={styles.musicianList}>
                <View style={styles.musician}>
                    <View styles={styles.imgmusician}>
                        <Image style={styles.imgperfil} source={perfil}/>
                    </View>
                    <View style={styles.infomusician}>
                        <Text style={styles.nameAgeText}>Nome, Idade</Text>

                        <Text style={styles.instrumenttext}>Instrumento</Text>    

                        <Text style={styles.citytext}>Cidade</Text>

                        <Text style={styles.biotext}>Bio</Text>
                    </View>
                    <View styles={styles.contactmuscian}>
                        <TouchableOpacity onPress={() => {}}>
                            <Image style={styles.whatsapp} source={whatsapp}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {}}>
                            <Image style={styles.gmail} source={gmail}/>
                        </TouchableOpacity>
                    </View>
                    
                    
                </View>
                
          </View>

      </View>
    
   );
}
