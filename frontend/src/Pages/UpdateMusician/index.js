import React, {useState}from 'react';
import {View, TextInput, Button} from 'react-native'


import api from '../../services/api'
import styles from './styles';


export default function RegisterMusician() {

  const[email, setEmail] = useState('');  
  const[city, setCity] = useState('');
  const[whatsapp, setWhatsapp] = useState('');
  const[instrument, setInstrument] = useState('');
  const[bio, setbio] = useState('');


  async function handleRegister(e){
    e.preventDefault();

    const data = {
      
      email,
      city,
      whatsapp,
      instrument,
      password,
      bio,
    };

    try{

     await api.put('musician',data)

      alert('Usuário cadastrado com sucesso')


    }catch(err){
      alert('Erro no cadastro, tente novamente')
    
    }

  }
  return ( 
    <View style={styles.container}>
      <View onSubmit={handleRegister}>
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
          placeholder='Bio'
          value={bio}
          onChange={e => setbio(e.target.value)}       
        />

      </View>

      <View>
          <Button title='Salvar'/>
      </View>

    </View>
  )
}