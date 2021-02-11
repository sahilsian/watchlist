import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native'

const Cont = styled.TouchableOpacity`
flex-direction: row;
align-items: center;
max-width: 175px;
padding-right: 05%;
left:45px;


`
// shadowOffset:{
//     width:0,
//     height:2,
// },
// shadowOpacity:0.1,
// shadowRadius:2
const Label = styled.Text`
font-size: 14px;
color: #3C4A60;
padding-left: 5%;
font-weight:bold;
`

const Add = styled.Image`
max-height: 30px;
max-width: 30px;
`

const AddSymbolTwo = (Title, onPress) => {
    return (
        <Cont>
            <Add source={require('../../assets/Add.png')}
            />
            <Label>Add symbol</Label>
        </Cont>
    )
}

export default AddSymbolTwo