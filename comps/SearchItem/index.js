import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native'

const Container = styled.TouchableOpacity`
position: relative;
width: 100%;
min-height: 56px;
justify-content: center;
align-items: center;
`;

const Title_text = styled.Text`
position: absolute;
font-size: 24px;
font-weight: bold;
text-transform: uppercase;
color: #3C4A60;
left: 10%;
`;

const Divider = styled.View`
position: absolute;
width: 80%;
height: 1px;
background-color: #3C4A60;
bottom: 0;
`

const SearchItem = ({ Title, onPress }) => {
    return (
        <Container onPress={onPress}>
            <Title_text>{Title}</Title_text>
            <Divider />
        </Container>

    )
}

export default SearchItem