import React, { Component } from 'react'
import { Button, Text, TextInput } from 'react-native';
import styles from '../../common/globalStyle'

export default class Mega extends Component {

    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
    }

    alterarQtdNumeros = (qtd) => {
        this.setState({ qtdNumeros: +qtd })
    }

    gerarNumeroNaoContigo = (nums) => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContigo(nums) : novo
    }

    gerarNumero = () => {
        const numeros = Array(this.state.qtdNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContigo(n)], [])
            .sort()
        this.setState({ numeros })
    }

    render() {
        return (
            <>
                <Text style={styles.fontG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Quantidade de números"
                    value={this.state.qtdNumeros}
                    onChangeText={this.alterarQtdNumeros}
                />
                <Button title="Gerar números" onPress={this.gerarNumero}/>
                <Text >
                    {this.state.numeros.join(',')}
                </Text>
            </>
        )
    }
}