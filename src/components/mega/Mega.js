import React, { Component } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import stylesGlobal from '../../common/globalStyle'
import NumeroComponent from './NumeroComponent';

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

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(n => {
            return <NumeroComponent num={n} />
        })
    }

    render() {
        return (
            <>
                <Text style={stylesGlobal.fontG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Quantidade de números"
                    value={this.state.qtdNumeros}
                    onChangeText={this.alterarQtdNumeros}
                />
                <Button title="Gerar números" onPress={this.gerarNumero} />
                <View style={styles.numeroView}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    numeroView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
})