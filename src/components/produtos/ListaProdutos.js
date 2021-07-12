import React from 'react';
import { Text, } from 'react-native';
import styles from '../../common/globalStyle'

import produtos from './produtos';
export default props => {
    function gerarLista(){
        return produtos.map(p => {
            return <Text key={p.id}>{p.id}) Produto: {p.nome}    Preco: R$ {p.preco}</Text>
        })
    }
    return (
        <>
            <Text style={styles.fontG}>
                Lista de Produtos
            </Text>
            {gerarLista()}
        </>
    )
}