import React, {useState}from 'react';
import {View, TextInput, Button} from 'react-native'
import {useHistory} from 'react-router-dom';

import api from '../../services/api'
import styles from './styles';


export default function RegisterMusician() {

  const[name, setName] = useState('');
  const[style, setStyle] = useState('');
  const[bio, setbio] = useState('');

  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault();

    const data = {
      name,
      style,
      bio,
    };

    try{

      await api.post('band',data)

      alert('Banda cadastrada com sucesso')

      history.push('/');

    }catch(err){
      alert('Erro no cadastro, tente novamente')
    
    }

  }
  return ( 
    <View style={styles.container}>
      <View onSubmit={handleRegister}>
        <TextInput
          placeholder='Nome da Banda'
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <TextInput
          placeholder='Gênero Musical'
          value={style}
          onChange={e => setStyle(e.target.value)}
        />

        
        <TextInput
          placeholder='Bio'
          value={bio}
          onChange={e => setbio(e.target.value)}       
        />

      </View>

      <View>
          <Button title='Cadastrar'/>
      </View>

    </View>
  )
}