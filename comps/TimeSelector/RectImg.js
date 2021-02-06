import React, { Component } from 'react'
import styled from "styled-components";
import { Image } from 'react-native'

const GradientImage = styled.Image`
height:100%;
width:100%
position:absolute;
`

const GradientImg = () => (
    <GradientImage source={require('./GradRect.png')} />
)
export default GradientImg;