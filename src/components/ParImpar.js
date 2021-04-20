import React from 'react';
import { Text, View, } from 'react-native';
import styles from '../common/globalStyle'

export default ({ num = 0 }) => {
    return (
        <View>
            {num % 2 === 0
                ? <Text style={styles.fontG}>Par</Text>
                : <Text style={styles.fontG}>Ímpar</Text>
            }            
        </View>
    )
}