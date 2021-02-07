import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import GradientImg from "./RectImg"

const Wrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 20px 50px;
    padding-bottom:50px;
`;

const TouchButton1 = styled.TouchableOpacity`
${props => props.oneDayActive && "border-color:#3C4A60;"}
${props => props.oneDayActive && "border-bottom-width:3;"}
border-bottom-left-radius: 1;
border-bottom-right-radius: 1;
`;

const TouchButton2 = styled.TouchableOpacity`
${props => props.twoDayActive && "border-color:#3C4A60;"}
${props => props.twoDayActive && "border-bottom-width:3;"}
border-bottom-left-radius: 1;
border-bottom-right-radius: 1;
`;


const TouchButton3 = styled.TouchableOpacity`
${props => props.threeDayActive && "border-color:#3C4A60;"}
${props => props.threeDayActive && "border-bottom-width:3;"}
border-bottom-left-radius: 1;
border-bottom-right-radius: 1;
`;


const TouchButton4 = styled.TouchableOpacity`
${props => props.fourDayActive && "border-color:#3C4A60;"}
${props => props.fourDayActive && "border-bottom-width:3;"}
border-bottom-left-radius: 1;
border-bottom-right-radius: 1;
`;


const TouchButton5 = styled.TouchableOpacity`
${props => props.fiveDayActive && "border-color:#3C4A60;"}
${props => props.fiveDayActive && "border-bottom-width:3;"}
border-bottom-left-radius: 1;
border-bottom-right-radius: 1;
`;




const Number = styled.Text`
    color: #3C4A60;
    font-weight: 700;
    font-size: 18px;
`;
const OuterDiv = styled.View`

`;


const TimeSelector = ({ active, oneDayActive, twoDayActive }) => {

    const [activeValue, changeActiveValue] = useState(5);

    useEffect(() => {
        changeActiveValue(active)
    }, [active])

    return (
        <OuterDiv>
            <GradientImg />
            <Wrapper>

                <TouchButton1 onPress={() => {
                    changeActiveValue(3)
                }} oneDayActive={activeValue === 3 ? active : null}><Number>1D</Number></TouchButton1>
                <TouchButton2 onPress={() => {
                    changeActiveValue(2)
                }} twoDayActive={activeValue === 2 ? active : null} ><Number>1W</Number></TouchButton2>
                <TouchButton3 onPress={() => {
                    changeActiveValue(1)
                }} threeDayActive={activeValue === 1 ? active : null}><Number>1M</Number></TouchButton3>
                <TouchButton4 onPress={() => {
                    changeActiveValue(4)
                }} fourDayActive={activeValue === 4 ? active : null}><Number>3M</Number></TouchButton4>
                <TouchButton5 onPress={() => {
                    changeActiveValue(5)
                }} fiveDayActive={activeValue === 5 ? active : null}><Number>ALL</Number></TouchButton5>

            </Wrapper>
        </OuterDiv>
    )
}


TimeSelector.defaultProps = {
    active: 1,
    oneDayActive: "border-bottom-width:3;",
    twoDayActive: "border-bottom-width:3;",
}

export default TimeSelector