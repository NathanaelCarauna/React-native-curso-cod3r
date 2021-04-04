import React from 'react';
import {Text, View} from 'react-native'

import Oficial, {Comp1, Comp2} from './components/Multi'
import Primeiro from './components/Primeiro'

export default () => (
  <View>    

    <Oficial/>
    <Comp1/>
    <Comp2/>
    <Primeiro/>
  </View>
)