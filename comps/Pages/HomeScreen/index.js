import React, {useEffect, useState} from 'react'
import styled from 'styled-components/native'
import Graph from '../../Graph'
import TimeSelector from '../../TimeSelector'


//Importing Axios for HTTP
var axios = require("axios").default;


//Creates full width styled component for JSX wrapping
const FullWidth = styled.View`
    width: 100%
    flex: 1;
    background-color: #fff;
`;

<<<<<<< HEAD
=======
const StocksCont = styled.ScrollView`
    width: 100%;
    min-height: 41px;
`

const Spacer = styled.View`
    width: 100%;
    min-height:  ${props => props.spacer ? props.spacer : "40px"};
`

>>>>>>> e3ecb849b5680aca855e94fc7d4d1e06e8bf3e27
//Axios options




//Data points for graph


<<<<<<< HEAD
const HomeScreen = ({}) => {
=======
const HomeScreen = ({spacer }) => {
>>>>>>> e3ecb849b5680aca855e94fc7d4d1e06e8bf3e27


    const [chart, setChart] = useState([])
    const [rounded, setRounded] = useState([])

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


        // var options = {
        //     method: 'GET',
        //     url: 'https://alpha-vantage.p.rapidapi.com/query',
        //     params: {
        //       interval: '1min',
        //       function: 'TIME_SERIES_INTRADAY',
        //       symbol: 'AMC',
        //       datatype: 'json',
        //       output_size: 'compact'
        //     },
        // headers: {
        //     'x-rapidapi-key': '0fafa20f3emsh32dcdb583b700cbp1985e7jsnfe5f976d3c08',
        //     'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com'
        // }
        // };

      
    // useEffect(()=> {

    //     //Running request on load of the page
    //     axios.request(options)
    //     .then((response) => {
    //         // Alpha Vantage API

    //         //Chart
    //         let chartdata = []
    //         chartdata.push(...chartdata, response.data[ "Time Series (1min)" ])
    //         chartdata.map((o) => {
                
    //         })
    //         let newData = []
    //         chartdata.forEach( (object, index) => {
    //              newData.push( { [index + 1]: object[Object.keys(object)[0]] } )
    //              console.log("new: ", newData)
    //         })


            // - Older Yahoo API Manipulation - 
            // const result = response.data.chart.result[0].indicators.quote[0].open

            // let divideInto = 5;
            // let means = new Array(Math.ceil(result.length / divideInto)).fill().map(() => {
            //     let nums = result.splice(0, divideInto)
            //     return nums.reduce((    x, y) => x + y) / nums.length;
            // });

            // let arr = means.map(a => a.toFixed(2));
            // let myArray = arr.filter((i)=> i != null && i != 0.00)

            // let average = myArray.reduce((a, b) => parseInt(a) + parseInt(b), 0)
            
            // let fullaverage = average / myArray.length

            // let mainArr = myArray.filter((i) => i > fullaverage - 150)

            // setRes(mainArr)

            // console.log(res)           

            
    //     }).catch( (error) => {
    //         console.error("here is the error:", error);
    //     });

    // }, [])

    return (
        <FullWidth>
<<<<<<< HEAD
            <Graph
            Data={data}
            >

            </Graph>
            <TimeSelector></TimeSelector>
=======
            <Graph Data={data} />
            <Spacer />
            <StocksCont>
                <Spacer spacer="50px" />
                <StockBar />
                <StockBar />
                <StockBar />
                <StockBar />
                <StockBar />
                <Spacer spacer="900px" />
            </StocksCont>
            <AddSymbol />
            <Spacer spacer="15px" />
>>>>>>> e3ecb849b5680aca855e94fc7d4d1e06e8bf3e27
        </FullWidth>
    )
}

export default HomeScreen