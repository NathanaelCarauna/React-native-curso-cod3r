import React from 'react'
import {Text} from 'react-native';
import styles from '../common/globalStyle'

export default ({min, max}) =>{
    const aleatorio = Math.floor(Math.random() * max - min + 1) + min;
    return(
        <Text style={styles.fontG}>Numero aleatório = {aleatorio}</Text>
    )
}