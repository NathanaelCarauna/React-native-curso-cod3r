import React from 'react';
import { Text } from 'react-native';
import Membro from './Membro';


export default props => {
    return(
        <>
            <Text>[INICIO] Membros da família</Text>
            {props.children}
            <Text>[FIM] Membros da família</Text>
            
        </>
    )
}