import React from 'react'
import styled from 'styled-components/native'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
  } from 'react-native-chart-kit'

import { Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width



const chartConfig = {
    backgroundGradientFrom: '#FFF',
    backgroundGradientTo: '#FFF',
    color: (opacity = 1) => `rgba(60, 74, 96)`,
    strokeWidth: 1.2,
    fillShadowGradient: `rgba(60, 74, 96)`
    
}

const Container = styled.View`
    width: 100%;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;


const Graph = ({Data}) => {
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
            withHorizontalLabels={false}
            />
        </Container>
    )
}

export default Graph