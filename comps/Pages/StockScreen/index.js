import React, { Children, useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { useNavigation, useRoute } from '@react-navigation/native';
import Graph from '../../Graph'
import TimeSelector from '../../TimeSelector';
import StockBar from '../../StockBarComp';
import axios from 'axios'
import AddSymbolTwo from '../../AddSymbolTwo';
import { event } from 'react-native-reanimated';
import AddSymbol from '../../AddSymbol';

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
    const route = useRoute();
    const equity = route.params.equity
    const navigation = useNavigation();
    console.log(equity)

    const [chart, setChart] = useState([
        { x: -0, y: 0 }
    ])
    const [rounded, setRounded] = useState([])
    const [sec, setSec] = useState(0)
    const [stateminy, setMinY] = useState(1);
    const [statemaxy, setMaxY] = useState(10);
    const [stateminx, setMinX] = useState(1);
    const [statemaxx, setMaxX] = useState(10);

    var options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {
            interval: '1min',
            function: 'TIME_SERIES_INTRADAY',
            symbol: equity,
            datatype: 'json',
            output_size: 'compact'
        },
        headers: {
            'x-rapidapi-key': '44d333d212mshd6e686f04a78658p15aadajsna5e2a79fcfda',
            'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com'
        }
    };

    useEffect(() => {
        axios.request(options)
            .then((response) => {
                axios.request(options)
                //console.log(response)
                var arr = [];
                for (var time in response.data["Time Series (1min)"]) {
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
                setMinY(minyarr)

                let maxyarr = arr.reduce((max, p) => p.y > max ? p.y : max, arr[0].y);
                console.log(maxyarr)
                setMaxY(maxyarr)

                let minxarr = arr.reduce((min, p) => p.x < min ? p.x : min, arr[0].x);
                console.log(minxarr)
                setMinX(minxarr)

                let maxxarr = arr.reduce((max, p) => p.x > max ? p.x : max, arr[0].x);
                console.log(maxxarr)
                setMaxX(maxxarr * 1)


                //sort the array for the x value to count up before setChart
                setSec(sec + 1);
                //console.log(arr);
                setChart(chart.concat(arr));
            });

    }, [])


    const saveStock = async () => {
        // var optionsTwo = {
        //     method: 'POST',
        //     url: `http://localhost:8080/API/stocks/${equity}/add`,
        // };

        // axios.request(optionsTwo)
        //     .then((response) => {
        //         navigation.navigate('Home')
        //     })

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
                <Graph
                    Data={chart}
                    miny={stateminy}
                    maxy={statemaxy}
                    minx={stateminx}
                    maxx={statemaxx}
                ></Graph>
                <TimeSelector></TimeSelector>
            </TopCont>
            <MidCont>
                <StockBar onPressTwo={() => console.log("clicked!")} status="true"></StockBar>
                {children}
            </MidCont>
            <BottomCont>
                <AddSymbol onPress={() => {
                    var optionsTwo = {
                        method: 'POST',
                        url: `http://localhost:8080/API/stocks/${equity}/add`,
                    };

                    axios.request(optionsTwo);
                    navigation.navigate('Home');
                }} />
            </BottomCont>
        </FullWidth>
    )
}

export default StockScreen