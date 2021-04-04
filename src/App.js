import React from 'react';
import {Text, View, StyleSheet} from 'react-native'

import Oficial, {Comp1, Comp2} from './components/Multi'
import Primeiro from './components/Primeiro'

export default () => (
  <View style={styles.App}>    

    <Oficial/>
    <Comp1/>
    <Comp2/>
    <Primeiro/>
  </View>
)

const styles = StyleSheet.create({
  App: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})