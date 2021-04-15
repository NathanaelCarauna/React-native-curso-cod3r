import React from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import styles from '../../common/globalStyle'

export default props => {
    return(
        <View style={localStyles.Display}>
            <Text style={[styles.fontG, localStyles.DisplayText]}>
                {props.num}
            </Text>    
        </View>
    )
}

const localStyles = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: '80%'
    },
    DisplayText: {
        color: '#fff'
    }
})