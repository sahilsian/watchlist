import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Importing Context
import MyProvider from './context';

import styled from 'styled-components/native'

//Importing Pages
import AddStockScreen from "./comps/Pages/AddStockScreen"
import StockScreen from "./comps/Pages/StockScreen"
import HomeScreen from "./comps/Pages/HomeScreen"
import SearchScreen from "./comps/Pages/SearchScreen"

// Importing comps
import Header from './comps/Header';
// import SearchItem from './comps/SearchItem';


//Creating default styled components
const Screen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Test = styled.View`
  width: 20px;
  height: 20px;
  background-color: #fad;
`;

//Creating homepage
function HomeScreenPage() {
  return (
    <Screen>
      <HomeScreen>
        {/* Page contents go here */}

      </HomeScreen>
    </Screen>
  );
}

//Creating stock screen
function StockScreenPage({navigation, route}) {
  const { equity } = route.params;
  return (
    <Screen>
      <StockScreen
      name={equity}
      >
        {/* Page contents go here */}
        
      </StockScreen>
    </Screen>
  );
}

//Creating search screen
function SearchScreenPage({navigation}) {
  return (
    <Screen>
      <SearchScreen 
      onPress={()=> {
        navigation.navigate('Stock', {
          equity: "TSLA"
        })
      }}>
        {/* Page contents go here */}
      </SearchScreen>
    </Screen>
  );
}

//Creating page to add stocks
//Affiliated with search screen
function AddStockScreenPage({route}) {
  
  return (
    <Screen>
      <AddStockScreen>
        {/* Page contents go here */}
        
      </AddStockScreen>
    </Screen>
  );
}



//Creating stack navigation for routing
const Stack = createStackNavigator();

export default function App() {
  return (
    <MyProvider>

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            }
          }}
        >
          {/* Homepage Stack Screen */}
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerTitle: props => <Header Title="Watchlist" Back="none" /> }}
          />

          {/* Stock Stack Screen */}
          <Stack.Screen
            name="Stock"
            component={StockScreenPage}
            options={{ headerTitle: props => <Header Title="Title" Back="flex" /> }}
          />

          {/* Search Stock Stack Screen */}
          <Stack.Screen
            name="Search"
            component={SearchScreenPage}
            options={{ headerTitle: props => <Header Title="Search" Back="flex" /> }}
          />

          {/* Add Stock Stack Screen */}
          <Stack.Screen
            name="Add"
            component={AddStockScreenPage}
            options={{ headerTitle: props => <Header Title=" Add" Back="flex" /> }}
          />

        </Stack.Navigator>
      </NavigationContainer>

    </MyProvider>
  );
}

