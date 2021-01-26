import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Importing Context
import MyProvider from './context';

import styled from 'styled-components'

//Importing Pages
import AddStockScreen from "./comps/Pages/AddStockScreen"
import StockScreen from "./comps/Pages/StockScreen"
import HomeScreen from "./comps/Pages/HomeScreen"
import SearchScreen from "./comps/Pages/SearchScreen"

//Creating default styled components
const Screen = styled.view`
  flex: 1;
  jjustify-content: center;
  align-items: center;
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
function StockScreenPage() {
  return (
    <Screen>
      <StockScreen>
        {/* Page contents go here */}
      </StockScreen>
    </Screen>
  );
}

//Creating search screen
function SearchScreenPage() {
  return (
    <Screen>
      <SearchScreen>
        {/* Page contents go here */}
      </SearchScreen>
    </Screen>
  );
}

//Creating page to add stocks
//Affiliated with search screen
function AddStockScreenPage() {
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
        <Stack.Navigator initialRouteName="Home">
          {/* Homepage Stack Screen */}
          <Stack.Screen 
          name="Home" 
          component={HomeScreenPage}
          options={{ title: 'Overview' }}
          />

          {/* Stock Stack Screen */}
          <Stack.Screen 
          name="Stock" 
          component={StockScreenPage}
          options={{ title: 'Overview' }}
          />

          {/* Search Stock Stack Screen */}
          <Stack.Screen 
          name="Search" 
          component={SearchScreenPage}
          options={{ title: 'Overview' }}
          />

          {/* Add Stock Stack Screen */}
          <Stack.Screen 
          name="Add" 
          component={AddStockScreenPage}
          options={{ title: 'Overview' }}
          />

        </Stack.Navigator>
      </NavigationContainer>

    </MyProvider>
  );
}


