import React from 'react'
import { Text, Image, TouchableOpacity, TextInput, View } from 'react-native';

import styled from 'styled-components/native'

const Container = styled.View`
width: 100%;
align-items: center;
justify-content: center;
padding-top: 15px;
`;

const Input = styled.TextInput`
max-width: 220px;
font-size: 16px;
font-weight: 300;
font-style: italic;
text-transform: uppercase;
padding-left: 10px;
`
const Wrapper = styled.View`
min-height: 41px;
min-width: 282px;
flex-direction: row;
align-items: center;
border-color: #3c4a60;
border: 2px;
border-radius: 50px;
padding-left: 15px;
`

const Icon = styled.Image`
height: 20px;
width: 20px;
resize-mode: contain;
`

const SearchBar = ({onChangeText}) => {
    
    return (
    <Container>
        <Wrapper>
            <Icon source={require('../../assets/search.png')} />
            <Input placeholder="Search" onChangeText={onChangeText} autoCompleteType="off" />
        </Wrapper>
    </Container>
    
    )
}

export default SearchBar