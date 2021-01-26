import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyProvider from './context';
import styled from 'styled-components'

//Creating default styled components
const Screen = styled.view`
  flex: 1;
  jjustify-content: center;
  align-items: center;
`;

//Creating homepage
function HomeScreen() {
  return (
    <Screen>
      <Text>Home</Text>
    </Screen>
  );
}

//Creating stock screen
function StockScreen() {
  return (
    <Screen>
      <Text>Home</Text>
    </Screen>
  );
}

//Creating search screen
function SearchScreen() {
  return (
    <Screen>
      <Text>Home</Text>
    </Screen>
  );
}

//Creating page to add stocks
//Affiliated with search screen
function AddStockScreen() {
  return (
    <Screen>
      <Text>Home</Text>
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
          <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Overview' }}
          />
          <Stack.Screen 
          name="Details" 
          component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    </MyProvider>
  );
}


