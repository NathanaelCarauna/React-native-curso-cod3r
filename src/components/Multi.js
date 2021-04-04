import React from 'react';
import {Text} from 'react-native';

import styles from '../common/globalStyle'

function Comp (){
    return(
        <Text style={styles.fontG}>Comp #oficial</Text>
    )
}

function Comp1 (){
    return(
        <Text style={styles.fontG}>Comp #01</Text>
    )
}

function Comp2 (){
    return (
        <Text style={styles.fontG}>Comp #02</Text>
    )
}

export {Comp1, Comp2}
export default Comp