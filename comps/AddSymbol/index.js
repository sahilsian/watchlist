import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native'

const Cont =styled.TouchableOpacity`
flex-direction: row;
align-items: center;
max-width: 140px;
justify-content: space-evenly;
`

const Label = styled.Text`
font-size: 14px;
color: #3C4A60;
`

const Add = styled.Image`
max-height: 30px;
max-width: 30px;
`

const AddSymbol = (Title) => {
    return(
        <Cont>
            <Add source={require('../../assets/Add.png')} 
            />
            <Label>Add symbol</Label>
        </Cont>
    )
}

export default AddSymbol