import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native'

const BigWrapper = styled.View`
position: relative;
min-width: 100%;
height: 40px;
`;

const SmallWrapper = styled.View`
position: absolute;
flex-direction: row;
align-items: center;
left: 7%;
height: 40px;
`

const Title_text = styled.Text`
font-size: 24px;
font-weight: bold;
text-transform: uppercase;
color: #3C4A60;
`;

const Back_btn = styled.Image`
max-height: 24px;
max-width: 14px;
display: ${props => props.Back};
`

const Header = ({Title, Back}) => {
    return (
    <BigWrapper>
        <SmallWrapper>
            <TouchableOpacity
            // onPress= (This is for later... we'll use it to natvigate backwards)
            >
                <Back_btn 
                source={require('../../assets/Back_Btn.png')} 
                Back={Back} />
            </TouchableOpacity>
            <Title_text>{Title}</Title_text>
        </SmallWrapper>
    </BigWrapper>
    )
}

export default Header