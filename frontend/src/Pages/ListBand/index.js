import React from 'react';
import {View, TouchableOpacity, Text, Image, FlatList, Linking} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import * as MailComposer from  'expo-mail-composer'

import styles from './styles';
import perfil from '../../assets/Perfillist.png'
import whatsapp from '../../assets/whatsapp.png'
import gmail from '../../assets/gmail.png'

export default function ListMusician() {

    const navigation = useNavigation();
    const message = 'mensagem'

    function navigationToHome(){
        navigation.navigate('Home')
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject:'assunto',
            recipients:['email@gmail.com'],
            body:message
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${numero}&text=${message}`)
    }


  return ( 
      <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={navigationToHome}>
                <Feather name='arrow-left' size={26} color='#fff' style={styles.arrow}/>
            </TouchableOpacity>

            <Text style={styles.bandHeader}>Bandas</Text>

          </View>

        <FlatList 
            data={[1,2,3]}
            style={styles.bandList}
            keyExtractor={band => String(band)}
            showsVerticalScrollIndicator={false}
            renderItem={() =>(
                <View style={styles.band}>
                    <View styles={styles.imgband}>
                        <Image style={styles.imgperfil} source={perfil}/>
                    </View>
                    <View style={styles.infoband}>
                        <Text style={styles.nametext}>Nome</Text>

                        <Text style={styles.citytext}>Cidade</Text>

                        <Text style={styles.styletext}>Gênero Musical</Text>    

                        <Text style={styles.biotext}>Bio</Text>
                    </View>
                    <View styles={styles.contactmuscian}>
                        <TouchableOpacity onPress={sendWhatsapp}>
                            <Image style={styles.whatsapp} source={whatsapp}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={sendMail}>
                            <Image style={styles.gmail} source={gmail}/>
                        </TouchableOpacity>
                    </View>
                    
                    
                </View>
            )}
        
        />

      </View>
    
   );
}
