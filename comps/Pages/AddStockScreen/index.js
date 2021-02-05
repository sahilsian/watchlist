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

const AddStockScreen = ({ }) => {


    return (
        <FullWidth>
            <GCont>
            </GCont>
            <StockBar status={true} />
            <AddSymbol />
        </FullWidth >
    )
}

export default AddStockScreen