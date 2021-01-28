import React, {useState} from 'react'
import styled from 'styled-components/native'
import { Rect, Text as TextSVG, Svg } from "react-native-svg";
import { View, Text } from 'react-native'

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
  } from 'react-native-chart-kit'

import { Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width - 10



const chartConfig = {
    backgroundGradientFrom: '#FFF',
    backgroundGradientTo: '#FFF',
    color: (opacity = 1) => `rgba(60, 74, 96)`,
    strokeWidth: 1.5,
    fillShadowGradient: `rgba(60, 74, 96)`,
    
}

const Container = styled.View`
    width: 100%;
    flex: 1;
    justify-content: center;
    background-color: #fff;
`;


const Graph = ({Data}) => {
    let [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false, value: 0 })

    return (
        <Container>
            <LineChart
            
            data={Data}
            width={screenWidth}
            height={220}
            withInnerLines={false}
            withOuterLines={false}
            withVerticalLabels={false}
            withDots={false}
            chartConfig={chartConfig}
            touchEnabled={true}
            dragEnabled={true}
            pinchZoom={true}
            withHorizontalLabels={false}
            
            decorator={() => {
                    return tooltipPos.visible ? <View>
                        <Svg>
                            <Rect x={tooltipPos.x - 15} 
                                y={tooltipPos.y + 10} 
                                width="40" 
                                height="30"
                                fill="black" />
                                <TextSVG
                                    x={tooltipPos.x + 5}
                                    y={tooltipPos.y + 30}
                                    fill="white"
                                    fontSize="16"
                                    fontWeight="bold"
                                    textAnchor="middle">
                                    {tooltipPos.value}
                                </TextSVG>
                        </Svg>
                    </View> : null
                }}
                onDataPointClick={(data) => {

                    let isSamePoint = (tooltipPos.x === data.x 
                                        && tooltipPos.y === data.y)

                    isSamePoint ? setTooltipPos((previousState) => {
                        return { 
                                  ...previousState,
                                  value: data.value,
                                  visible: !previousState.visible
                               }
                    })
                        : 
                    setTooltipPos({ x: data.x, value: data.value, y: data.y, visible: true });

                }}
            />
        </Container>
    )
}

export default Graph