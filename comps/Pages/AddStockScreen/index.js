import React from 'react'
import styled from 'styled-components/native'
import StockBar from '../../StockBarComp';

//Creates full width styled component for JSX wrapping
const FullWidth = styled.View`
    width: 100%
    flex: 1;
`;

const AddStockScreen = ({ }) => {
    return (
        <FullWidth>
            <StockBar />
        </FullWidth>
    )
}

export default AddStockScreen