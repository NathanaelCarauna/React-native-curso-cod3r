import React from 'react';
import {Text, View, StyleSheet} from 'react-native'

import Contador from './components/Contador'
import Botao from './components/Botao'
import TituloFrag from './components/Fragment'
import Aleatorio from './components/Aleatorio'
import MinMax from './components/MinMax'
import Oficial, {Comp1, Comp2} from './components/Multi'
import Primeiro from './components/Primeiro'

export default () => (
  <View style={styles.App}>    
    
    
    {/* 
    <Contador inicial={100} passo={15}/>
    <Contador />
    <Botao/>
    <TituloFrag principal="Cadastro de produtos" 
      secundario="Tela de cadastro de produtos"/>
    <Aleatorio min={4} max={15}/>
    <MinMax min='3' max='20'/>    
    <Oficial/>
    <Comp1/>
    <Comp2/>
    <Primeiro/> */}
  </View>
)

const styles = StyleSheet.create({
  App: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
})