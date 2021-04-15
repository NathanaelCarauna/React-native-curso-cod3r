import React from 'react';
import { Platform, Text,} from 'react-native';
import styles from '../common/globalStyle'

export default props => {
    if(Platform.OS === 'android'){
        return(
            <Text style={styles.fontG}>
                Android            
            </Text>
        )
    }
    else if(Platform.OS === 'ios'){
        return(
            <Text style={styles.fontG}>
                iOS
            </Text>
        )        
    }
    else{
        return(
            <Text style={styles.fontG}>Eita!!!</Text>
        )
    }
}