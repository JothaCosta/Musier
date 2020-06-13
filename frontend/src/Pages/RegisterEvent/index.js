import React, {useState}from 'react';
import {View, TextInput, Button} from 'react-native'
import {useHistory} from 'react-router-dom';

import api from '../../services/api'
import styles from './styles';

export default function RegisterEvent() {

  const[name, setName] = useState('');
  const[city, setCity] = useState('');
  const[bio, setbio] = useState('');
  const[facebook, setFacebook] = useState('');

  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault();

    const data = {
      name,
      city,
      bio,
      facebook
    };

    try{

      await api.post('event',data)

      alert('Evento cadastrado com sucesso')

      history.push('/');

    }catch(err){
      alert('Erro no cadastro, tente novamente')
    
    }

  }
  return ( 
    <View style={styles.container}>
      <View onSubmit={handleRegister}>
        <TextInput
          placeholder='Nome do Evento'
          value={name}
          onChange={e => setName(e.target.value)}
        
        />

        <TextInput
          placeholder='Cidade'
          value={city}
          onChange={e => setCity(e.target.value)}       
        />

        <TextInput
          placeholder='bio'
          value={bio}
          onChange={e => setbio(e.target.value)}       
        />

        <TextInput
          placeholder='Facebook'
          value={facebook}
          onChange={e => setFacebook(e.target.value)}       
        />


      </View>

      <View>
          <Button title='Cadastrar'/>
      </View>

    </View>
  )
}