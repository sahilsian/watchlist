import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native'

const Container = styled.View`
width: 100%;
min-height: 40px;
flex-direction: row;
align-items: center;
padding-left: 5%;
padding-top: 10%;
background: white;
`;

const Title_text = styled.Text`
font-size: 24px;
font-weight: bold;
text-transform: uppercase;
color: #3C4A60;
padding-left: 5%;
`;

const Back_btn = styled.Image`
min-height: 24px;
min-width: 14px;
display: ${props => props.Back ? "True" : "none"};
`

const Header = ({Title, Back}) => {
    return (
    <Container>
        <TouchableOpacity
        // onPress= (This is for later... we'll use it to natvigate backwards)
        >
            <Back_btn 
            source={require('../../assets/Back_Btn.png')} 
            Back={Back} />
        </TouchableOpacity>
        <Title_text>{Title}</Title_text>
    </Container>
    )
}

export default Header