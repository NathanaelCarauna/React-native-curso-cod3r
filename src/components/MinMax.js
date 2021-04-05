import React from 'react'
import {Text} from 'react-native';
import styles from '../common/globalStyle'


export default (props) => {
    console.warn(props)
    return (
        <Text style={styles.fontG}>
            O valor {props.max} é maior que o valor {props.min}
        </Text>
    )
}