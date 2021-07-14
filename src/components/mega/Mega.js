import React, { Component } from 'react'
import { Text, TextInput } from 'react-native';
import styles from '../../common/globalStyle'

export default class Mega extends Component {

    state = {
        qtdNumeros: this.props.qtdNumeros
    }

    alterarQtdNumeros = (qtd) => {
        this.setState({ qtdNumeros: qtd })
    }

    render() {
        return (
            <>
                <Text style={styles.fontG}>
                    Gerador de Mega-Sena
                    {this.state.qtdNumeros}
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Quantidade de números"
                    value={this.state.qtdNumeros}
                    onChangeText={this.alterarQtdNumeros}
                />
            </>
        )
    }
}