import React from 'react';
import {SafeAreaView, Text, Button, Alert} from 'react-native';
import Estilo from './Estilo';
import App from '../App';

export default (props) => {


  return (
    <SafeAreaView style={Estilo.ButtonBox}>
      <Button
        title="Previous"
        disabled={props.personagemId == 1}
        color="#FFFF00"
        onPress={() => props.onClickBack()}
      />
      <Button
        title="Next"
        disabled={props.personagemId == 83}
        color="#FFFF00"
        onPress={() => props.onClickNext()}
      />
    </SafeAreaView>
  );
};
