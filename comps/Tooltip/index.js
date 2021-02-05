import React from 'react'
import styled from 'styled-components/native'
import {Tooltip} from 'react-native-responsive-linechart'

const tooltipComponent = styled.Text`

`;

const TooltipComp = ({number}) => {
    return (
        <Tooltip
        value={{ x: numberx, y: numbery}}
        theme={{
            label: {
                color: 'white',
                fontSize: 12,
                fontWeight: 700,
                fontFamily: 'your font here',
                textAnchor: 'middle',
                opacity: 1,
                dx: 0,
                dy: 16.5,
            },
            shape: {
                width: 30,
                height: 20,
                dx: 0,
                dy: 20,
                rx: 4,
                color: 'black',
            },
              
        }}
        />
    )
}

export default TooltipComp