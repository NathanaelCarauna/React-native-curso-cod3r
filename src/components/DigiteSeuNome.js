import React, { useState } from 'react';
import { Text, SafeAreaView, TextInput} from 'react-native';
import styles from '../common/globalStyle'

export default props => {
    const [nome, setnome] = useState("")
    return(
        <SafeAreaView>
            <Text>Nome: {nome}</Text>
            <TextInput
                placeholder="Digite seu nome"
                onChangeText={nome => setnome(nome)}
            />
        </SafeAreaView>
    )
}