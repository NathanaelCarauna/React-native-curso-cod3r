import React, {Fragment} from 'react'
import {Text} from 'react-native';
import styles from '../common/globalStyle'

export default props => {
    return (
        <>
            <Fragment key="">
                <Text style={styles.fontG}>{props.principal}</Text>
                <Text>{props.secundario}</Text>
            </Fragment>
            
            <Fragment>
                <Text style={styles.fontG}>{props.principal}</Text>
                <Text>{props.secundario}</Text>
            </Fragment>
        </>
    )
}