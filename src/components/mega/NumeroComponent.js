import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import stylesGlobal from '../../common/globalStyle'

export default ({ num }) => {
    return (
        <View style={styles.container}>
            <Text style={[stylesGlobal.fontG, styles.num]}>
                {num}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 50,
        backgroundColor: 'black',
        margin: 5, 
        borderRadius: 25,
    },
    num: {
        color: 'white'
    }
})