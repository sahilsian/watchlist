import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import Graph from '../../Graph'
import StockBar from '../../StockBarComp'
import TimeSelector from '../../TimeSelector'
import AddSymbol from '../../AddSymbol'


//Importing Axios for HTTP
var axios = require("axios").default;


//Creates full width styled component for JSX wrapping
const Wrap = styled.View`
    flex: 1;
    background-color: #fff;
    overflow:visible;
`

const StockBarDiv = styled.ScrollView`
height:70%;
padding-top:50px;
overflow:visible;
z-index:-10;
background-color: white;
`

const FullWidth = styled.View`
    background-color: #fff;
    overflow:visible;
`

const BottomCont = styled.View`
    position: absolute;
    justify-content: center;
    bottom: 18%;
    padding-left: 10%;
    min-height: 30px;
    width: 100%;
    border-radius:100px;
    
`
// background:blue;

const BottomPadding = styled.View`
height:100px;
`;


//Axios options




//Data points for graph



const HomeScreen = ({ onSearchPress }) => {


    const [data, setData] = useState([])
    const [chart, setChart] = useState([
        { x: -0, y: 0 }
    ])
    const [rounded, setRounded] = useState([])
    const[sec, setSec] = useState(0)
    const [miny, setMinY] = useState(null);




    var options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {
            interval: '1min',
            function: 'TIME_SERIES_INTRADAY',
            symbol: 'AMC',
            datatype: 'json',
            output_size: 'compact'
        },
        headers: {
            'x-rapidapi-key': '0fafa20f3emsh32dcdb583b700cbp1985e7jsnfe5f976d3c08',
            'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com'
        }
    };

    const getChart = async() => {
        console.log("pressed");
        axios.request(options)
            .then((response) => {
                   //console.log(response)
                   var arr = [];
                   for(var time in response.data["Time Series (1min)"]){
                       var obj = response.data["Time Series (1min)"][time]
                       console.log(time);
                    // const seconds = Date.parse(time.replace(" ", "T"));
                    const date = new Date(time.replace(" ", "T"));
                    console.log(date.getHours(), date.getMinutes(), date.getHours()*60+date.getMinutes());
                   
                    //console.log(seconds);
                    arr.push({
                        x:date.getHours()*60+date.getMinutes(),
                        // date:time,
                        y:obj["1. open"]*1
                    })
                   }

                   //sort the array for the x value to count up before setChart
                   setSec(sec+1);
                   //console.log(arr);
                   setChart(chart.concat(arr));


            });
    }
    useEffect(() => {
        //const seconds = Date.parse("2021-02-04T18:21:00")
        //console.log(seconds)
        //Running request on load of the page
        

    }, [])

    const styles = StyleSheet.create({
        contentContainer: {
            flexGrow: 2,
        }
    })

    return (
        <Wrap>
            <FullWidth contentContainerStyle={styles.contentContainer}>
                <Graph
                    Data={chart}
                >

                </Graph>
                <TimeSelector></TimeSelector>
                <StockBarDiv >
                    <StockBar status={true} />
                    <StockBar />
                    <StockBar />
                    <StockBar />
                    <StockBar />
                    <BottomPadding />
                </StockBarDiv >
                <BottomCont>
                    <AddSymbol onPress={getChart} />
                </BottomCont>
            </FullWidth>
        </Wrap>
    )
}

export default HomeScreen