import React from 'react'
import styled from 'styled-components/native'
import SearchItem from '../../SearchItem'
import SearchBar from '../../SearchBar'

//Creates full width styled component for JSX wrapping
const FullWidth = styled.ScrollView`
    width: 100%
    flex: 1;
    background-color: #fff;
`;

const SearchScreen = ({}) => {
    return (
        <FullWidth>
            <SearchBar />
            <SearchItem Title="TSLA" />
        </FullWidth>
    )
}

export default SearchScreen