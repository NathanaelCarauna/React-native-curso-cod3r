import React from 'react';
import {Text, View, StyleSheet} from 'react-native'

import MinMax from './components/MinMax'
import Oficial, {Comp1, Comp2} from './components/Multi'
import Primeiro from './components/Primeiro'

export default () => (
  <View style={styles.App}>    
    <MinMax min='3' max='20'/>
    <MinMax min='35' max='50'/>
    {/* <Oficial/>
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