import React from 'react';
import { Text,} from 'react-native';
import styles from '../../common/globalStyle'   

export default props => {
    return(
        <>
            <Text style={styles.fontG}>{props.a}</Text>
            <Text style={styles.fontG}>{props.b}</Text>        
        </>
    )
}