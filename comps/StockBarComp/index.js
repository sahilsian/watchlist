import React, { useState } from 'react';
import styled from 'styled-components/native';
import axios from 'axios';


const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  max-width: 300px;
  max-height: 185px;
  margin: auto;
  position:relative;

`;

const StockCont = styled.TouchableOpacity`
    flex:1;
    width:100%;
    align-items: center;
    justify-content: flex-start;
    display:flex;
    flex-direction:row;
    background-color: #3C4A60;
    border-radius:100px;
    padding: 0 10px;
    max-width:300px;
    max-height:41px;
    z-index:2;
    position:relative;
`;

const ArrowCirle = styled.View`
    max-width: 28px;
    max-height: 28px;
    border-radius: 100px;
    border: 3px white;    
    align-items: center;
    justify-content:center;
    overflow: hidden;
    width:100%;
    height:100%;
`;

const ArrowImg = styled.Image`
    width: 8px;
    height: 8px;
    overflow:visible;
    transform: ${props => props.containerState ? "rotate(180deg)" : "rotate(0deg)"};
`;

const TitleText = styled.Text`
    margin-left:3%;
    color:white;
    width:65%;
`;

const TrashImg = styled.Image`
    width: 16px;
    height: 16px;
    overflow:visible;
    z-index: 5;
    display: ${props => props.containerState && props.selectedStock ? "flex" : "none"};
`;

const TrashView = styled.TouchableOpacity`
position: absolute;
right:24%;
top:7%;
z-index:9;
`;


const DropCont = styled.View`
    width:100%;
    height:100%;
    max-width:300px;
    min-height: 165px;
    z-index:0;
    border-radius:25px;
    padding: 52px 17% 7% 17%;
    background: rgba( 60, 74, 96, 0.60 );
    overflow:hidden;
    display: ${props => props.containerState ? "flex" : "none"};
    opacity:${props => props.containerState ? "100" : "0"};
    position: absolute;
    flex-grow:1;
`

const TextArea = styled.View` 
    width:100%;
    height:100%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
`;

const BodyText = styled.View`
    width:100%;
    height:100%;
    max-height: 20px
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const HeaderTxt = styled.Text`
    color:white;
    font-weight: bold;
`;

const BodyTxt = styled.Text`
    color:white;

`;

const DataView = styled.View`
width:100%;
height:${props => props.contState ? "165px" : "41px"};
position:relative;
margin-bottom: 15px;
`;



const StockBar = ({ onPress, status, name, username, stock, market, yields, low, high, saved }) => {
    // This represents if the menu is open or closed
    const [contState, setState] = useState(status);
    // This represents if the stock is on the watch list or not
    const [stockState, setStockState] = useState(false);

    var options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: { function: 'GLOBAL_QUOTE', symbol: `GME`, datatype: 'json' },
        headers: {
            'x-rapidapi-key': '0fafa20f3emsh32dcdb583b700cbp1985e7jsnfe5f976d3c08',
            'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com'
        }
    };

    // axios.request(options).then(function (response) {
    //     console.log(response.data);
    // }).catch(function (error) {
    //     console.error(error);
    // });






    return (
        <DataView contState={contState}>
            <TrashView onPress={onPress}>
                <TrashImg containerState={contState} selectedStock={stockState} resizeMode="contain" source={require('./TrashBin.png')} />
            </TrashView>
            <Container>
                <StockCont onPress={() => {
                    if (!contState) {
                        setState(true);
                    } else {
                        setState(false);
                    };
                    if (saved === false) {
                        setStockState(false);
                        // console.log("stockData.saved is " + o.saved);
                    } else {
                        setStockState(true);
                        // console.log("stockData.saved is " + o.saved);
                    }
                }}

                >
                    <ArrowCirle>
                        <ArrowImg containerState={contState} source={require('./Arrow.png')} />
                    </ArrowCirle>
                    <TitleText>{stock}</ TitleText>
                    {/* <TrashImg containerState={contState} selectedStock={stockState} resizeMode="contain" source={require('./TrashBin.png')} onPress={onPress} /> */}


                </StockCont>
                <DropCont containerState={contState}>
                    <TextArea>
                        <BodyText>
                            <HeaderTxt>Market:</HeaderTxt>
                            <BodyTxt>{market}</BodyTxt>
                        </BodyText>
                        <BodyText>
                            <HeaderTxt>Yield:</HeaderTxt>
                            <BodyTxt>{yields}</BodyTxt>
                        </BodyText>
                        <BodyText>
                            <HeaderTxt>Low:</HeaderTxt>
                            <BodyTxt>{low}</BodyTxt>
                        </BodyText>
                        <BodyText>
                            <HeaderTxt>High:</HeaderTxt>
                            <BodyTxt>{high}</BodyTxt>
                        </BodyText>
                    </TextArea>
                </DropCont>
            </Container>
        </DataView>
    )
}

StockBar.defaultProps = {
    containerState: null,
    high: "test",
    status: false,
    username: 'fake',
    stock: 'TSLA',
    market: 'NYSE',
    yields: '1.99',
    low: '0.81',
    high: '3.12',
    saved: true,
}


export default StockBar

