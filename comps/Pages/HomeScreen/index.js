import React, {useEffect, useState} from 'react'
import styled from 'styled-components/native'
import Graph from '../../Graph'

//Importing Axios for HTTP
var axios = require("axios").default;


//Creates full width styled component for JSX wrapping
const FullWidth = styled.View`
    width: 100%
    flex: 1;
`;

//Axios options




//Data points for graph


const HomeScreen = ({}) => {

    const [res, setRes] = useState([])
    const [rounded, setRounded] = useState([])

    const data = {
        datasets: [{
          data: [1, 2, 3 ,4 ,7]
        }]
    }

    var options = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-chart',
        params: {interval: '1m', symbol: 'TSLA', range: '1d', region: 'US'},
        headers: {
          'x-rapidapi-key': '0fafa20f3emsh32dcdb583b700cbp1985e7jsnfe5f976d3c08',
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
      };
      
    useEffect(()=> {

        //Running request on load of the page
        axios.request(options).then((response) => {
            const result = [response.data.chart.result[0].indicators.quote[0].close]

            let divideInto = 10;
            let means = new Array(Math.ceil(result.length / divideInto)).fill().map(() => {
                let nums = result.splice(0, divideInto)
                nums.reduce((x, y) => x + y) / nums.length
            });

            setRes(means)
            console.log(means)


            
        }).catch( (error) => {
            console.error(error);
        });

    }, [])

    return (
        <FullWidth>
            <Graph
            Data={data}
            >

            </Graph>
        </FullWidth>
    )
}

export default HomeScreen