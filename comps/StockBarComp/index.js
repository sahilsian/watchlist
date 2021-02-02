import React, { useState } from 'react'
import styled from 'styled-components/native'


// border: 1px dashed black; 

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  max-width: 283px;
  max-height: 185px;
  margin: auto;
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
    max-width:282px;
    max-height:41px;
    z-index:2;
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


const DropCont = styled.View`
    width:100%;
    height:100%;
    max-width:282px;
    min-height: 165px;
    z-index:0;
    border-radius:25px;
    position: absolute;
    padding: 52px 17% 7% 17%;
    background: rgba( 60, 74, 96, 0.60 );
    overflow:hidden;
    display: ${props => props.containerState ? "flex" : "none"};
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
height: 100%;
`;


const fakedb = [
    {
        id: 1,
        username: 'fake',
        stock: 'TSLA',
        market: 'NYSE',
        yield: '1.99',
        low: '0.81',
        high: '3.12',
        saved: true,
    }
]


const StockBar = ({ stockData }) => {
    // This represents if the menu is open or closed
    const [contState, setState] = useState(false);
    // This represents if the stock is on the watch list or not
    const [stockState, setStockState] = useState(false);



    return (
        <DataView>
            {stockData.map(o => <Container>
                <StockCont onPress={() => {
                    if (!contState) {
                        setState(true);
                    } else {
                        setState(false);
                    };
                    if (o.saved === true) {
                        console.log(o.saved)
                        setStockState(true);
                        console.log(stockState);
                    } else {
                        setStockState(false);
                        console.log(o.saved)
                        console.log(stockState);
                    }
                }}

                >
                    <ArrowCirle>
                        <ArrowImg containerState={contState} source={require('../StockBarComp/Arrow.png')} />
                    </ArrowCirle>
                    <TitleText>{o.stock}</ TitleText>
                    <TrashImg containerState={contState} selectedStock={stockState} source={require('../StockBarComp/TrashBin.png')} />

                </StockCont>
                <DropCont containerState={contState}>
                    <TextArea>
                        <BodyText>
                            <HeaderTxt>Market:</HeaderTxt>
                            <BodyTxt>{o.market}</BodyTxt>
                        </BodyText>
                        <BodyText>
                            <HeaderTxt>Yield:</HeaderTxt>
                            <BodyTxt>{o.yield}</BodyTxt>
                        </BodyText>
                        <BodyText>
                            <HeaderTxt>Low:</HeaderTxt>
                            <BodyTxt>{o.low}</BodyTxt>
                        </BodyText>
                        <BodyText>
                            <HeaderTxt>High:</HeaderTxt>
                            <BodyTxt>{o.high}</BodyTxt>
                        </BodyText>
                    </TextArea>
                </DropCont>
            </Container>)}
        </DataView>
    )
}

StockBar.defaultProps = {
    containerState: null,
    stockData: fakedb
}


export default StockBar


// {stockData.map(o => <Placeholder></Placeholder>)}>


// onPress={() => {
//     if (o.saved === true) {
//         console.log(o.saved)
//         setStockState(true);
//     } else {
//         setStockState(false);
//         console.log(o.saved)
//     }
// }} 