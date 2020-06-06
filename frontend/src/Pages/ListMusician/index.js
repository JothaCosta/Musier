import React from 'react';
import {View, FlatList, Linking} from 'react-native'
import * as MailComposer from 'expo-mail-composer'

import styles from './styles';

export default function ListMusician() {

    const message = 'Olá nomeMusico gostaria de forma uma banda'

    function sendMail(){
        MailComposer.composeAsync({
           subject:'', //Assunto 
           recipients:[''], // para quem enviar
           body: message,
           
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=48996312800&text=${message}`)
    }


  return ( 
    <View style={styles.container}>
        <View style={styles.hearder}>

        </View>

        <FlatList 
            data={[]}
            style={styles.ListMusician}
            keyExtractor={Musician => String(Musician)}
            showsVerticalScrollIndicator={false}
            renderItem={() =>       
               
                <View style={styles.Musician}>

                </View>      
            }
        />
  
    </View>
   );
}
