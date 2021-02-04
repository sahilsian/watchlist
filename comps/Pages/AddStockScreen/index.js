import React from 'react';
import styled from 'styled-components/native';


import AddSymbol from '../../AddSymbol';
import Graph from '../../Graph';
import StockBar from '../../StockBarComp';

//Creates full width styled component for JSX wrapping
const FullWidth = styled.ScrollView`
    width: 100%;
    height:100%;
    flex: 1;
    display:flex;
    flex-direction:column;
    padding:10%;
`;

const AddStockScreen = ({ }) => {
    return (
        <FullWidth>

            <StockBar />
            <AddSymbol />
        </FullWidth>
    )
}

export default AddStockScreen