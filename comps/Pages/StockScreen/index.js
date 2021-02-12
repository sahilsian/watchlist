import React, { Children } from 'react'
import styled from 'styled-components/native'
import { useNavigation, useRoute } from '@react-navigation/native';
import Graph from '../../Graph'
import TimeSelector from '../../TimeSelector';
import StockBar from '../../StockBarComp';
import axios from 'axios'
import AddSymbolTwo from '../../AddSymbolTwo';
import { event } from 'react-native-reanimated';

//Creates full width styled component for JSX wrapping
const FullWidth = styled.View`
position: relative;    
width: 100%;
flex: 1;
background-color: #fff;
`;

const TopCont = styled.View`
height: 50%;
`

const MidCont = styled.View`
`

const BottomCont = styled.View`
position: absolute;
bottom: 5%;
`

const StockScreen = ({ children, name }) => {

    var options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: { function: 'GLOBAL_QUOTE', symbol: `GME`, datatype: 'json' },
        headers: {
            'x-rapidapi-key': '0fafa20f3emsh32dcdb583b700cbp1985e7jsnfe5f976d3c08',
            'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });


    const saveStock = () => {
        var options = {
            method: 'POST',
            url: `http://localhost:8080/API/stocks//add`,
        };
        axios.request(options)
            .then((response) => {
                console.log(response);
            });
    }




    // function addStock() {
    //     handleSubmit = event => {
    //         axios.post('', {name})
    //         console.log(res);
    //         console.log(res.data);
    //     }
    // }

    return (
        <FullWidth>
            <TopCont>
                <Graph></Graph>
                <TimeSelector></TimeSelector>
            </TopCont>
            <MidCont>
                <StockBar status="true"></StockBar>
                {children}
            </MidCont>
            <BottomCont>
                <AddSymbolTwo onPress={saveStock()} />
            </BottomCont>
        </FullWidth>
    )
}

export default StockScreen