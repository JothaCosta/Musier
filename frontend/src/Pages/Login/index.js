import React, {useState} from 'react';
import {View, TextInput, Button, Linking, Image} from 'react-native'

import api from '../../services/api';

import logoImg from '../../assets/Logo.png';
import styles from './styles';

export default function Login(){
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState(''); 

    async function handleLogin(e){
        e.preventDefault();

        try{
           await api.post('session', {email , password});


        }catch(err){
            alert('Falha no Login, Tente Novamente.')
        }
    }

    return(

        <View style={styles.container}>
            <Image source={logoImg}/>
            <View onSubmit={handleLogin}>
                <View> E-mail </View>

                <TextInput
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />

                <TextInput
                placeholder="Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />

                <Button title='Entrar'/>

                <Linking to= "/registerMusician">
                    Cadastrar
                
                </Linking>

            </View>
          
        </View>
        )
    }