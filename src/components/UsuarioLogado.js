import React from 'react';
import { Text, } from 'react-native';
import styles from '../common/globalStyle'
import If from './If';

export default props => {
    const usuario = props.usuario || {}
    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={styles.fontG}>
                    Usuário logado:
                </Text>
                <Text style={styles.fontG}>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )
}