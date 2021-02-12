import React, { useEffect, useState } from 'react'
import { View } from 'react-native';
import styled from 'styled-components/native';


import AddSymbol from '../../AddSymbol';
import Graph from '../../Graph';
import StockBar from '../../StockBarComp';



//Creates full width styled component for JSX wrapping
const FullWidth = styled.ScrollView`
    width: 100%;
    height:100%;
    flex: 1;
    background-color: white;
`;

const GCont = styled.View`

`;


const data = [
    { x: -2, y: 15 },
    { x: -1, y: 10 },
    { x: 0, y: 12 },
    { x: 5, y: 8 },
    { x: 6, y: 12 },
    { x: 7, y: 14 },
    { x: 8, y: 12 },
    { x: 9, y: 13.5 },
    { x: 10, y: 18 },
]


const AddStockScreen = ({ }) => {


    return (
        <FullWidth>
            <GCont>
                <Graph Data={data} />
            </GCont>
            <StockBar status={true} contState={false} />
            <AddSymbol />
        </FullWidth >
    )
}

export default AddStockScreen