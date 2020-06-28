import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Image, Text} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import {useNavigation} from '@react-navigation/native'

import api from '../../services/api';

import logoImg from '../../assets/Logo.png';
import styles from './styles';

export default function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation();

    /*useEffect(() =>{
        AsyncStorage.getItem('user').then(user => {
            if(user) {
                navigation.navigate('Home',{ user })
            }
        })
        
    })*/
   

    async function navigationToHome(){
        try{
            const response = await api.post('/session', {email, password})

            const {musician_id} = response.data

            await AsyncStorage.setItem('id', musician_id.toString())

            navigation.navigate('Home')
            
        }catch{
            alert('Usuário não encontrado')
        }
    }

    function navigationToRegister(){
        navigation.navigate('RegisterMusician')
    }
    

    return(

            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={logoImg}/>
                </View>

                <Text style={styles.login}>Login</Text>
                <TextInput 
                    style={styles.inputlogin} 
                    placeholder='E-mail'
                    value={email}
                    onChangeText={setEmail}/>

                <Text style={styles.password}>Senha</Text>
                <TextInput 
                    style={styles.inputpass} 
                    placeholder='Senha'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}/>

                <TouchableOpacity style={styles.btnlogin} onPress={navigationToHome}>
                    <Text style={styles.btnLoginText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnregister} onPress={navigationToRegister}>
                    <Text style={styles.btnRegisterText}>Cadastrar</Text>
                </TouchableOpacity>

            </View>
        
        )
    }