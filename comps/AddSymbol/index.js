import React from 'react'
import { Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components/native'

const Cont = styled.TouchableOpacity`
flex-direction: row;
align-items: center;
max-width: 175px;
padding-right: 05%;
background-color:rgba(255, 255, 255, 1);
border: 4px solid rgba(255, 255, 255, 1);
position: absolute;
border-radius:100px;
left:45px;

shadow-color: #333;
shadow-offset: { width: 0 , height: 0 };
shadow-opacity: 0.5;
shadow-radius: 10px; 
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
box-shadow:1px 1px 2px rgba(0,0,0,0.2);
`

const AddSymbol = (Title, onPress) => {
    const navigation = useNavigation();
    return (
        <Cont onPress={() => {
            navigation.navigate('Search')
        }}>
            <Add source={require('../../assets/Add.png')}
            />
            <Label>Add symbol</Label>
        </Cont>
    )
}

export default AddSymbol