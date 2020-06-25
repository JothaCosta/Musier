import React from 'react';
import {View, TouchableOpacity, Text, Image, FlatList} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

import styles from './styles';
import perfil from '../../assets/Perfillist.png'


export default function ListEvent() {

    const navigation = useNavigation();


    function navigationToHome (){
        navigation.navigate('Home')
    }

  return ( 
      <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={navigationToHome}>
                <Feather name='arrow-left' size={26} color='#fff' style={styles.arrow}/>
            </TouchableOpacity>

            <Text style={styles.eventHeader}>Eventos</Text>

          </View>

          <FlatList
            data={[1,2,3]}
            style={styles.eventList}
            keyExtractor={event => String(event)}
            showsVerticalScrollIndicator={false}
            renderItem={() => (
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
            )}
          
          />

      </View>
    
   );
}
