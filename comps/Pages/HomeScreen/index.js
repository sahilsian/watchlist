import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import Graph from '../../Graph'
import SearchItem from '../../SearchItem';
import CurrentPrice from '../../CurrentPrice';
import AddSymbol from '../../AddSymbol';


//Importing Axios for HTTP
var axios = require("axios").default;


//Creates full width styled component for JSX wrapping
const FullWidth = styled.View`
    width: 100%
    flex: 1;
    background-color: #fff;
`;

//Axios options




//Data points for graph


const HomeScreen = ({ }) => {


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

    useEffect(() => {

        //Running request on load of the page
        axios.request(options)
            .then((response) => {
                const result = response.data.chart.result[0].indicators.quote[0].open

                let divideInto = 5;
                let means = new Array(Math.ceil(result.length / divideInto)).fill().map(() => {
                    let nums = result.splice(0, divideInto)
                    return nums.reduce((x, y) => x + y) / nums.length;
                });

                let arr = means.map(a => a.toFixed(2));
                let myArray = arr.filter((i) => i != null && i != 0.00)

                let average = myArray.reduce((a, b) => parseInt(a) + parseInt(b), 0)

                let fullaverage = average / myArray.length

                let mainArr = myArray.filter((i) => i > fullaverage - 150)

                setRes(mainArr)

                console.log(res)


            }).catch((error) => {
                console.error(error);
            });

    }, [])

    return (
        <FullWidth>
            {/* Was testing comps on this page */}
            {/* <SearchItem Title="TSLA" />
            <CurrentPrice Price="$880.02" />
            <AddSymbol Title="Add a symbol" /> */}
            {/* <Graph
                Data={data}
            >
            </Graph> */}
        </FullWidth>
    )
}

export default HomeScreen