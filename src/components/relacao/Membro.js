import React from 'react';
import { Text,} from 'react-native';
import styles from '../../common/globalStyle'

export default props => {
    return(
        <Text style={styles.fontG}>
            {props.nome} {props.sobrenome}
        </Text>
    )
}