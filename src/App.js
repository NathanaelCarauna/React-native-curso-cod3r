import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native'


import Primeiro from './components/Primeiro'
import Oficial, { Comp1, Comp2 } from './components/Multi'
import MinMax from './components/MinMax'
import Aleatorio from './components/Aleatorio'
import TituloFrag from './components/Fragment'
import Botao from './components/Botao'
import Contador from './components/Contador'
import Pai from './components/direta/Pai';
import PaiIndireto from './components/indireta/Pai'
import ContadorV2 from './components/contador/ContadorV2'
import DiferenciarMob from './components/DiferenciarMob';
import ParImpar from './components/ParImpar';
import Familia from './components/relacao/Familia';
import Membro from './components/relacao/Membro';
import UsuarioLogado from './components/UsuarioLogado';
import ListaProdutos from './components/produtos/ListaProdutos';
import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
import DigiteSeuNome from './components/DigiteSeuNome';
import Quadrado from './components/layout/Quadrado';
import FlexboxV1 from './components/layout/FlexboxV1';
import FlexboxV2 from './components/layout/FlexboxV2';
import FlexboxV3 from './components/layout/FlexboxV3';
import FlexboxV4 from './components/layout/FlexboxV4';
import Mega from './components/mega/Mega';

export default () => (
  <SafeAreaView style={styles.App}>
    <Mega qtdNumeros={7}/>
    {/* 
    <FlexboxV4 />
    <FlexboxV3 />
    <FlexboxV2 />
    <FlexboxV1 />
    <DigiteSeuNome/>
    <ListaProdutosV2 />
    <ListaProdutos />
    <UsuarioLogado usuario={{nome:'Nathanael', email: 'nathan@email.com'}}/>
    <UsuarioLogado usuario={{email: 'nathan@email.com'}}/>
    <UsuarioLogado usuario={{nome:'Nathanael'}}/>
    <UsuarioLogado usuario={null}/>
    <Familia>
      <Membro nome='Saravor' sobrenome='Silveira'/>
      <Membro nome='Rebecor' sobrenome='Silveira'/>
    </Familia> 
    <Familia>
      <Membro nome='Lucas' sobrenome='Santos'/>
      <Membro nome='Bianca' sobrenome='Santos'/>
    </Familia> 
    <ParImpar num={2}/>
    <DiferenciarMob/>
    <ContadorV2/>
    <PaiIndireto/>
    <Pai/>
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
  </SafeAreaView>
)

const styles = StyleSheet.create({
  App: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
})