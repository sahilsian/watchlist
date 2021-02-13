import React from 'react'
import styled from 'styled-components/native'
import { Chart, VerticalAxis, HorizontalAxis, Line, Area, Tooltip } from 'react-native-responsive-linechart'
import { Dimensions } from 'react-native';

const Container = styled.View`
padding-top:10%;
padding-right:10%;
padding-left: 10%;
overflow:visible;
    justify-content: center;
    background-color: #fff;
`;


const Graph = ({ Data, minx, miny, maxx, maxy }) => {


    return (
        <Container>
            <Chart
                style={{ height: 200, overflow: "hidden", backgroundColor: '#fff' }}
                data={Data}

                xDomain={{ min: minx, max: maxx }}
                yDomain={{ min: miny, max: maxy }}

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
                    theme={{ gradient: { from: { color: '#3C4A60', opacity: 0.7 }, to: { color: '#ffffff', opacity: 1 } } }}
                    smoothing={'bezier'}
                    tension={0}

                />

                <Line
                    theme={{ stroke: { color: '#3C4A60', width: 1.8 } }}
                    tooltipComponent={<Tooltip
                        position={{ x: 0, y: 20 }}
                    />}
                    smoothing={'bezier'}
                    tension={0}

                />
            </Chart>
        </Container>
    )
}

Graph.defaultProps = {
    Data: [
        { x: -2, y: 15 },
        { x: -1, y: 10 },
        { x: 0, y: 12 },
        { x: 5, y: 8 },
        { x: 6, y: 12 },
        { x: 7, y: 14 },
        { x: 8, y: 12 },
        { x: 9, y: 13.5 },
        { x: 10, y: 18 }
    ],
    minx: 1,
    miny: 1,
    maxx: 100,
    maxy: 100,
}

export default Graph