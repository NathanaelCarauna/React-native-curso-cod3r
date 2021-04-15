import React, {useState} from 'react';
import { Text } from 'react-native';
import styles from '../../common/globalStyle'
import Filho from './Filho';

export default props => {
    const [text, setText] = useState('');
    const [num, setNum] = useState('');
    function exibirValor(numero, text){
        setNum(numero)
        setText(text)
    }
    return(
        <>
            <Text style={styles.fontG}>{text}{num}</Text>
            <Filho min={1} max={60} funcao={exibirValor}/>
        </>
    )
}