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

export default function ListMusician() {

    const [musicians, setMusicians] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation();
    const message = 'OI'


    function navigationToHome(){
        navigation.navigate('Home')
    }

    async function loadMusician(){

        if(loading){
            return;
        }    
        
        setLoading(true)

        const response = await api.get('/musician',{
            params:{page}
        })


        setMusicians([...musicians,...response.data])
        setPage(page + 1)
        setLoading(false)
    }

    useEffect(() =>{
        loadMusician();
    },[])


  return ( 
      <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={navigationToHome}>
                <Feather name='arrow-left' size={26} color='#fff' style={styles.arrow}/>
            </TouchableOpacity>

            <Text style={styles.musicianHeader}>Músicos</Text>

          </View>

          <FlatList
            data={musicians}
            style={styles.musicianList}
            keyExtractor={musician => String(musician.musician_id)}
            showsVerticalScrollIndicator={false}
            onEndReached={loadMusician}
            onEndReachedThreshold={0.2}
            renderItem={({item : musician})=>(
                <View style={styles.musician}>
                    <View styles={styles.imgmusician}>
                        <Image style={styles.imgperfil} source={perfil}/>
                    </View>
                    <View style={styles.infomusician}>
                        <Text style={styles.nameAgeText}>{musician.name}, {musician.age}</Text>

                        <Text style={styles.instrumenttext}>{musician.instrument}</Text>    

                        <Text style={styles.citytext}>{musician.city}</Text>

                        <Text style={styles.biotext}>{musician.bio}</Text>
                    </View>
                    <View styles={styles.contactmuscian}>
                        <TouchableOpacity onPress={() => {
                             Linking.openURL(`whatsapp://send?phone=55${musician.whatsapp}&text=${message}`)
                        }}>
                            <Image style={styles.whatsapp} source={whatsapp}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                                MailComposer.composeAsync({
                                subject:'Musier',
                                recipients:[musician.email],
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
