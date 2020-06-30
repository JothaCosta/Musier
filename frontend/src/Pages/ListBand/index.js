import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, Image, FlatList, Linking} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import * as MailComposer from  'expo-mail-composer'

import styles from './styles';
import perfil from '../../assets/Perfillist.png'
import whatsapp from '../../assets/whatsapp.png'
import gmail from '../../assets/gmail.png'

import api from '../../services/api'

export default function ListBand() {

    const [bands, setBands] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation();
    const message = 'mensagem'

    function navigationToHome(){
        navigation.navigate('Home')
    }


    async function loadBand(){
        if(loading){
            return;
        }    
        
        setLoading(true)

        const response = await api.get('/band',{
            params:{page}
        })

        setBands([...bands,...response.data])
        setPage(page + 1)
        setLoading(false)
    }

    useEffect(() =>{
        loadBand();
    },[])


  return ( 
      <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={navigationToHome}>
                <Feather name='arrow-left' size={26} color='#fff' style={styles.arrow}/>
            </TouchableOpacity>

            <Text style={styles.bandHeader}>Bandas</Text>

          </View>

        <FlatList 
            data={bands}
            style={styles.bandList}
            keyExtractor={band => String(band.id)}
            showsVerticalScrollIndicator={false}
            onEndReached={loadBand}
            onEndReachedThreshold={0.2}
            renderItem={({item : band}) =>(
                <View style={styles.band}>
                    <View styles={styles.imgband}>
                        <Image style={styles.imgperfil} source={perfil}/>
                    </View>
                    <View style={styles.infoband}>
                        <Text style={styles.nametext}>{band.name}</Text>

                        <Text style={styles.citytext}>{band.city}</Text>

                        <Text style={styles.styletext}>{band.style}</Text>    

                        <Text style={styles.biotext}>{band.bio}</Text>
                    </View>
                    <View styles={styles.contactmuscian}>
                        <TouchableOpacity onPress={() =>{
                            Linking.openURL(`whatsapp://send?phone=55${band.whatsapp}&text=${message}`)
                        }}>
                            <Image style={styles.whatsapp} source={whatsapp}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                                MailComposer.composeAsync({
                                subject:'assunto',
                                recipients:[band.email],
                                body:message
                            })
                        }}>
                            <Image style={styles.gmail} source={gmail}/>
                        </TouchableOpacity>
                    </View>
                    
                    
                </View>
            )}
        
        />

      </View>
    
   );
}
