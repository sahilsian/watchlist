import React from 'react'
import styled from 'styled-components/native'
import { Chart, VerticalAxis, HorizontalAxis, Line, Area, Tooltip } from 'react-native-responsive-linechart'
import { Dimensions } from 'react-native';

const Container = styled.View`
    justify-content: center;
    background-color: #fff;
    padding: 30px 50px;
`;


const Graph = ({Data}) => {
    

    return (
        <Container>
            <Chart
            style={{height: 160, backgroundColor: '#fff' }}
            data={Data}
            xDomain={{ min: 0, max: 10 }}
            yDomain={{ min: -4, max: 20 }}
            
            >
            <VerticalAxis
                tickCount={0}
                theme={{ 
                    labels: { formatter: (v) => v.toFixed(2) },
                    axis: {
                        visible: false,
                        stroke: {
                          color: '#bbb',
                          width: 2,
                          opacity: 1,
                          dashArray: []
                        },
                        dy: 0,
                      }
                
                }}
            />
            <HorizontalAxis 
            tickCount={0}
            theme={{
                axis: {
                    visible: false,
                    stroke: {
                      color: '#bbb',
                      width: 2,
                      opacity: 1,
                      dashArray: []
                    },
                    dy: 0,
                  }
            }}
            
            />
            <Area 
            theme={{ gradient: { from: { color: '#3C4A60', opacity: 0.7}, to: { color: '#ffffff', opacity: 1 } }}}
            smoothing={'bezier'}
            tension={0.05}
            
            />

            <Line 
            theme={{ stroke: { color: '#3C4A60', width: 1.8 } }}
            tooltipComponent={<Tooltip
                position={{x: 0, y: 20}}
                 />}
            smoothing={'bezier'}
            tension={0.05}
            />
            </Chart>
        </Container>
    )
}

export default Graph