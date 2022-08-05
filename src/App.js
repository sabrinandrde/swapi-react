import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import api from './service/api';
import Estilo from './components/Estilo';


export default function App() {

const [personagem, setPersonagem] = useState(undefined);//Manipula o estado da aplicação

    useEffect(() => {//primeiro parâmetro sempre será uma função que vai ser executada assim que o componente renderizar
        api.get('/3')
        .then((response) => {
            setPersonagem(response.data);
        })
        .catch((erro) => {})
    }, []);// será executada sempre que o componente for atualizado

    return (
        <SafeAreaView style={Estilo.Swapi}>
            <Text style={Estilo.Title}>Star Wars Chacacter</Text>
            <Text style={Estilo.Person}>{personagem?.name}</Text>
        </SafeAreaView>
    );

}


