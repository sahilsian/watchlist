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
`

const StockBarDiv = styled.ScrollView`
height:50%;
overflow:visible;
z-index:-10;
background-color: #fff;
`

const FullWidth = styled.View`
    background-color: #fff;
`

const BottomCont = styled.View`
    position: absolute;
    justify-content: center;
    top: 98%;
    min-height: 30px;
    width: 44 %;
    border-radius:100px;
    
`
// background:blue;

//Axios options




//Data points for graph



const HomeScreen = ({ onSearchPress }) => {


    const [data, setData] = useState([])
    const [chart, setChart] = useState([{ x: -2, y: 15 },
    { x: -1, y: 10 },
    { x: 0, y: 12 },
    { x: 5, y: 8 },
    { x: 6, y: 12 },
    { x: 7, y: 14 },
    { x: 8, y: 12 },
    { x: 9, y: 13.5 },
    { x: 10, y: 18 }])
    const [rounded, setRounded] = useState([])




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


    useEffect(() => {
        //const seconds = Date.parse("2021-02-04T18:21:00")
        //console.log(seconds)
        //Running request on load of the page
        axios.request(options)
            .then((response) => {
                //    //console.log(response)
                //    var arr = [];
                //    for(var time in response.data["Time Series (1min)"]){
                //        var obj = response.data["Time Series (1min)"][time]
                //        //console.log(obj);
                //     // const seconds = Date.parse(time.replace(" ", "T"));
                //     let seconds = 1
                //     //console.log(seconds);
                //     arr.push({
                //         y:seconds += 1,
                //         // date:time,
                //         x:obj["1. open"]
                //     })
                //    }
                //    console.log(arr);

                setData(response)
                console.log(data)

            });

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
                    <StockBar />
                    <StockBar />
                    <StockBar />
                    <StockBar />
                </StockBarDiv >
                <BottomCont>
                    <AddSymbol />
                </BottomCont>
            </FullWidth>
        </Wrap>
    )
}

export default HomeScreen