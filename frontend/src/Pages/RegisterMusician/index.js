import React, {useState}from 'react';
import {View, TextInput, Button} from 'react-native'
import {useHistory} from 'react-router-dom';

import api from '../../services/api'
import styles from './styles';


export default function RegisterMusician() {

  const[name, setName] = useState('');
  const[age, setAge] = useState('');
  const[email, setEmail] = useState('');
  const[city, setCity] = useState('');
  const[whatsapp, setWhatsapp] = useState('');
  const[instrument, setInstrument] = useState('');
  const[password, setPassword] = useState('');
  const[bio, setbio] = useState('');

  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault();

    const data = {
      name,
      age,
      email,
      city,
      whatsapp,
      instrument,
      password,
      bio,
    };

    try{

     await api.post('musician',data)

      alert('Usuário cadastrado com sucesso')

      history.push('/');

    }catch(err){
      alert('Erro no cadastro, tente novamente')
    
    }

  }
  return ( 
    <View style={styles.container}>
      <View onSubmit={handleRegister}>
        <TextInput
          placeholder='Nome'
          value={name}
          onChange={e => setName(e.target.value)}
        
        />

        <TextInput
          placeholder='Idade'
          value={age}
          onChange={e => setAge(e.target.value)}
        />

        <TextInput
          placeholder='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <TextInput
          placeholder='Cidade'
          value={city}
          onChange={e => setCity(e.target.value)}       
        />

        <TextInput
          placeholder='Telefone'
          value={whatsapp}
          onChange={e => setWhatsapp(e.target.value)}
        />

        <TextInput
          placeholder='Instrumento'
          value={instrument}
          onChange={e => setInstrument(e.target.value)}      
        />

        <TextInput
          placeholder='Senha'
          value={password}
          onChange={e => setPassword(e.target.value)}       
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