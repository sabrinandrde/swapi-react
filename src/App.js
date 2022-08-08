import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Image} from 'react-native';
import api from './service/api';
import Botao from './components/Botao';
import Estilo from './components/Estilo';

export default function App() {
  const [personagem, setPersonagem] = useState(undefined);
  const [personagemId, setPersonagemId] = useState(1);

  const incrementPersonagemId = () => setPersonagemId((vlAnterior) => vlAnterior+1);
  const decrementPersonagemId = () => {
    if(personagemId > 1) {
      setPersonagemId((vlAnterior) => vlAnterior-1);
    } 
  };

  useEffect(() => {
    api
      .get('/' + personagemId)
      .then(response => {
        setPersonagem(response.data);
      })
      .catch(erro => {
        decrementPersonagemId()
      });
  }, [personagemId]);

  return (
    <SafeAreaView style={Estilo.Swapi}>
      <Text style={Estilo.Title}>Star Wars Character</Text>
      <Text style={Estilo.Person}>{personagem?.name}</Text>
      <Botao personagemId={personagemId}
             onClickNext={incrementPersonagemId} 
             onClickBack={decrementPersonagemId}/>
    </SafeAreaView>
  );
}
