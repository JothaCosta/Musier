import React, {useState} from 'react';
import {View, TextInput, Button, Linking, Image} from 'react-native'
import {useHistory} from 'react-router-dom';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.png';
import { View, TextInput } from 'react-native';
import styles from '../UpdateMusician/styles';

export default function Logon(e){
    e.preventDefault();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState(''); 
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
           await api.post('session', {email , password});

            history.push('/profile');

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