import React, { Component } from 'react'
import {Text} from 'react-native';
import styles from '../../common/globalStyle'

export default class Mega extends Component {
    render(){
        return (
            <Text style={styles.fontG}>
                Gerador de Mega-Sena
            </Text>
        )
    }
}