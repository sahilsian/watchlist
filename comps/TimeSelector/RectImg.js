import React, { Component } from 'react'
import styled from "styled-components";
import { Image } from 'react-native'

const GradientImage = styled.Image`
top:0px;
height:160%;
width:100%
position:absolute;
`

const GradientImg = () => (
    <GradientImage pointerEvents={"none"} source={require('./WhiteGradient.png')} />
)
export default GradientImg;