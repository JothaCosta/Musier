import React,{useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, Image, FlatList,Linking} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

import styles from './styles';
import perfil from '../../assets/Perfillist.png'

import api from '../../services/api'

export default function ListEvent() {

    const [events, setEvents] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation();


    function navigationToHome (){
        navigation.navigate('Home')
    }

    async function loadEvent(){
        if(loading){
            return;
        }    
        
        setLoading(true)

        const response = await api.get('/event',{
            params:{page}
        })

        setEvents([...events,...response.data])
        setPage(page + 1)
        setLoading(false)
    }

    useEffect(() =>{
        loadEvent();
    },[])

  return ( 
      <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={navigationToHome}>
                <Feather name='arrow-left' size={26} color='#fff' style={styles.arrow}/>
            </TouchableOpacity>

            <Text style={styles.eventHeader}>Eventos</Text>

          </View>

          <FlatList
            data={events}
            style={styles.eventList}
            keyExtractor={event => String(event.id)}
            showsVerticalScrollIndicator={false}
            onEndReached={loadEvent}
            onEndReachedThreshold={0.2}
            renderItem={({item: event}) => (
                <View style={styles.event}>
                    <View styles={styles.imgevent}>
                        <Image style={styles.imgperfil} source={perfil}/>
                    </View>
                    <View style={styles.infoevent}>
                        <Text style={styles.nametext}>{event.name}</Text>   

                        <Text style={styles.citytext}>{event.city}</Text>

                        <Text style={styles.biotext}>{event.bio}</Text>
                    </View>
                    <View styles={styles.contactevent}>
                        <TouchableOpacity onPress={() => {
                            
                         Linking.openURL(event.facebook)
                        }}>
                        <Feather name='facebook' size={33} color='#3b5998' style={styles.facebook}/>
                        </TouchableOpacity>

                    </View>
                    
                    
                </View>
            )}
          
          />

      </View>
    
   );
}
