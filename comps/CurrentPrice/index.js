import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native'

const Container = styled.View`
position: relative;
width: 100%;
min-height: 70px;
justify-content: center;
align-items: center;
margin-top: 20px;
`;

const Label = styled.Text`
position: absolute;
text-transform: uppercase;
font-size: 12px;
font-weight: 300;
color: #3C4A60;
top: 0;
left: 10%;
`

const Price_text = styled.Text`
position: absolute;
font-size: 36px;
font-weight: bold;
color: #3C4A60;
bottom: 0;
left: 10%;
`;


const CurrentPrice = ({Price}) => {
    return (
    <Container>
        <Label>Current Price</Label>
        <Price_text>{Price}</Price_text>
    </Container>
    
    )
}

export default CurrentPrice