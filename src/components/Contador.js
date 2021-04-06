import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import styles from '../common/globalStyle'

export default ({ inicial = 0, passo = 1 }) => {
    const [numero, setNumero] = useState(inicial)
    const add = () => {
        setNumero(numero + passo)
    }
    const sub = () => {
        setNumero(numero - passo)
    }
    return (
        <>
            <Text style={styles.fontG}>{numero}</Text>
            <Button title="+" onPress={add} />
            <Button title="-" onPress={sub} />
        </>
    )
}