import React from 'react';
import { StyleSheet, View } from 'react-native';
import Quadrado from './Quadrado';


export default props => {
    return (
        <View style={style.FlexV1}>
            <View style={style.v0} />
            <View style={style.v1} />
            <View style={style.v2} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flex: 1,
        width: 100,
        backgroundColor: "black",
    },
    v0: {
        height: 300,
        backgroundColor: "#36c8a7"
    },
    v1: {
        flex: 3,
        backgroundColor: "#50d1f6"
    },
    v2: {
        flex: 1,
        backgroundColor: "#dd22c1"

    }
})