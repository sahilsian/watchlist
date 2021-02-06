import React, {useEffect, useState} from 'react'
import styled from 'styled-components/native'
import SearchItem from '../../SearchItem'
import SearchBar from '../../SearchBar'
import { useNavigation } from '@react-navigation/native';

var axios = require("axios").default;

//Creates full width styled component for JSX wrapping
const FullWidth = styled.ScrollView`
    width: 100%
    flex: 1;
    background-color: #fff;
`;

const SearchScreen = ({}) => {
    const navigation = useNavigation();
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    var options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {keywords: `${searchTerm !== "" ? searchTerm : "TSLA"}`, function: 'SYMBOL_SEARCH', datatype: 'json'},
        headers: {
          'x-rapidapi-key': '0fafa20f3emsh32dcdb583b700cbp1985e7jsnfe5f976d3c08',
          'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com'
        }
    };

    useEffect(() => {
        axios.request(options)

        .then((res) => {
        setData(res)

        })

        .catch((error) => {
            setData("Error")
        });


    }, [searchTerm])

    

    return (
        <FullWidth>
            <SearchBar onChangeText={event => setSearchTerm(event)} />
            {searchTerm !== ""
            ?
            data.data.bestMatches.map((i) => {
                return (
                    <SearchItem 
                    Title={i["1. symbol"]}
                    onPress={()=> {
                        navigation.navigate('Stock', {
                            equity: i["1. symbol"]
                        })
                    }} 
                    />
           )})
            :
            <SearchItem Title={"TSLA"} 
            onPress={()=> {
                navigation.navigate('Stock', {
                    equity: "TSLA"
                })
            }}/>
            }

        </FullWidth>
    )
}

export default SearchScreen