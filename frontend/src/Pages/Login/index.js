import React from 'react';
import {View, TextInput, TouchableOpacity, Image, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'
//import api from '../../services/api';

import logoImg from '../../assets/Logo.png';
import styles from './styles';

export default function Login(){

    const navigation = useNavigation();

    function navigationToHome(){
        navigation.navigate('Home')
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
                <TextInput style={styles.inputlogin} placeholder='E-mail'/>
                <Text style={styles.password}>Senha</Text>
                <TextInput style={styles.inputpass} placeholder='Senha'/>

                <TouchableOpacity style={styles.btnlogin} onPress={navigationToHome}>
                    <Text style={styles.btnLoginText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnregister} onPress={navigationToRegister}>
                    <Text style={styles.btnRegisterText}>Cadastrar</Text>
                </TouchableOpacity>

            </View>
        
        )
    }