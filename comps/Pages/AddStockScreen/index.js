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

    const [res, setRes] = useState([])
    const [rounded, setRounded] = useState([])

    const data = {
        datasets: [{
            data: res.length > 1 ? res : [1, 1, 1, 1]
        }]
    }

    var options = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart',
        params: { interval: '1m', symbol: 'GME', range: '1d', region: 'US' },
        headers: {
            'x-rapidapi-key': '0fafa20f3emsh32dcdb583b700cbp1985e7jsnfe5f976d3c08',
            'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
    };



    return (
        <FullWidth>
            <GCont>
                <Graph Data={data} />
            </GCont>
            <StockBar status={true} />
            <AddSymbol />
        </FullWidth >
    )
}

export default AddStockScreen