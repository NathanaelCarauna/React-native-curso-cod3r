import React from 'react';
import { Button, StyleSheet, Text, View,} from 'react-native';

export default props => {
    return(
        <View style={localStyles.container}>
            <Button title="+" onPress={props.inc}/>
            <Button title="-" onPress={props.dec}/>
        </View>
    )
}

const localStyles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginTop: 10        
    },    
})