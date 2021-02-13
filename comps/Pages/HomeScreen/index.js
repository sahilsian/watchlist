import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import Graph from '../../Graph'
import StockBar from '../../StockBarComp'
import TimeSelector from '../../TimeSelector'
import AddSymbol from '../../AddSymbol'
import { set } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native';


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
    const navigation = useNavigation();
    const FakeDB = [
        "TSLA", "ZOM", "TLRY", "MSFT", "AAPL"
    ]

    const [data, setData] = useState([])
    const [chart, setChart] = useState([
        { x: -0, y: 0 }
    ])
    const [rounded, setRounded] = useState([])
    const [sec, setSec] = useState(0)
    const [stateminy, setMinY] = useState(1);
    const [statemaxy, setMaxY] = useState(10);
    const [stateminx, setMinX] = useState(1);
    const [statemaxx, setMaxX] = useState(10);
    const [allStocks, setAllStocks] = useState();
    const [openStock, setOpenStock] = useState('ZOM');
    const [contState, setState] = useState();
    const [stockState, setStockState] = useState(false);


    const deleteStock = () => {
        var options = {
            method: 'POST',
            url: `http://localhost:8080/API/stocks/TSLA/delete`,
        };
        axios.request(options)
            .then((response) => {
                console.log(response);
            });
    }

    
    
    useEffect(() => {
        console.log(openStock)
    }, [openStock])


    var optionsTwo = {
        method: 'GET',
        url: 'http://localhost:8080/api/stocks/',

    };


    useEffect(() => {


        var options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: {
                interval: '1min',
                function: 'TIME_SERIES_INTRADAY',
                symbol: openStock,
                datatype: 'json',
                output_size: 'compact'
            },
            headers: {
                'x-rapidapi-key': '0fafa20f3emsh32dcdb583b700cbp1985e7jsnfe5f976d3c08',
                'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com'
            }
        };


        console.log("pressed");
        axios.request(options)
            .then((response) => {

                    //console.log(response)
                    var arr = [];
                    for(var time in response.data["Time Series (1min)"]){
                        var obj = response.data["Time Series (1min)"][time]
                        //console.log(time);

                    // const seconds = Date.parse(time.replace(" ", "T"));
                    const date = new Date(time.replace(" ", "T"));
                    //console.log(date.getHours(), date.getMinutes(), date.getHours()*60+date.getMinutes());

                    //console.log(seconds);
                    arr.push({
                        x: date.getHours() * 60 + date.getMinutes(),
                        // date:time,
                        y: obj["1. open"] * 1
                    })
                }


                    let minyarr = arr.reduce((min, p) => p.y < min ? p.y : min, arr[0].y);
                    console.log(minyarr)
                    setMinY(minyarr )

                    let maxyarr = arr.reduce((max, p) => p.y > max ? p.y : max, arr[0].y);
                    console.log(maxyarr)
                    setMaxY(maxyarr )

                    let minxarr = arr.reduce((min, p) => p.x < min ? p.x : min, arr[0].x);
                    console.log(minxarr)
                    setMinX(minxarr)

                    let maxxarr = arr.reduce((max, p) => p.x > max ? p.x : max, arr[0].x);
                    console.log(maxxarr)
                    setMaxX(maxxarr * 1)


                    //sort the array for the x value to count up before setChart
                    setSec(sec+1);
                    //console.log(arr);
                    setChart(chart.concat(arr));



            });
    }, [openStock])

    const [deleteStck, setDeleteStck] = useState("");


    useEffect(() => {
        //const seconds = Date.parse("2021-02-04T18:21:00")
        //console.log(seconds)
        //Running request on load of the page
        axios.request(optionsTwo)
            .then((response) => {
                // console.log(response)
                setAllStocks(response.data.result)
            });



    }, [])

    useEffect(() => {
        var optionsDelete = {
            method: 'POST',
            url: `http://localhost:8080/API/stocks/${deleteStck}/delete`,
        };
        axios.request(optionsDelete)
            .then((response) => {
                console.log(response);
            });

        //const seconds = Date.parse("2021-02-04T18:21:00")
        //console.log(seconds)
        //Running request on load of the page
        axios.request(optionsTwo)
            .then((response) => {
                // console.log(response)
                setAllStocks(response.data.result)
            });

    }, [deleteStck])

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
                    miny={stateminy}
                    maxy={statemaxy}
                    minx={stateminx}
                    maxx={statemaxx}
                >

                </Graph>
                <TimeSelector></TimeSelector>
                <StockBarDiv >
                    {allStocks !== undefined
                        ?
                        allStocks.map(o => <StockBar onPress={() => { 
                            setDeleteStck(o.stockname)
                            setOpenStock(o.stockname)
                        } }
                            stock={o.stockname}
                            // market={ }
                            // yields={ }
                            // low={ }
                            // high={ }
                            // saved={ }
                            status={o.open}
                        />
                        )
                        :
                        FakeDB.map((o) => {
                            return (
                            <StockBar stock={o} onPress={() => { 
                                setDeleteStck(o)
                                
                            }}
                            onPressTwo={() => {
                                setOpenStock(o)
                                console.log(openStock)
                            }}
                            contState={contState}
                            stockState={stockState}
                            />
                                
                            )
                        })
                    }

                    <BottomPadding />
                </StockBarDiv >
                <BottomCont>
                    <AddSymbol onPress={()=> {
                        navigation.navigate('Search')
                    }} />
                </BottomCont>
            </FullWidth>
        </Wrap>
    )
}

export default HomeScreen