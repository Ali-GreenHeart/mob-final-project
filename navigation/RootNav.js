import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import {
    GameScreen,
    PasswordGameScreen,
    ColorGameScreen,
    MemoryGridGameScreen,
    TrafficLightGameScreen,
    HomeScreen,
    TicTacGameScreen,
    MatchingBoxesGameScreen,
    LoginScreen,
    ProfileScreen,
    AllGamesScreen,
    MinFinderGameScreen,
    StatisticsScreen,
    AlphaRefGame
} from "../screens";



const {Navigator,Screen} = createStackNavigator();
export const RootNav = () => (
    <NavigationContainer>
        <Navigator>
            <Screen name="Home" component={HomeScreen}/>
            <Screen name="All Games" component={AllGamesScreen}/>
            <Screen name="GameScreen" component={GameScreen}/>
            <Screen name="Password" component={PasswordGameScreen}/>
            <Screen name="Color" component={ColorGameScreen}/>
            <Screen name="Memory Grid" component={MemoryGridGameScreen}/>
            <Screen name="Traffic Light" component={TrafficLightGameScreen}/>
            <Screen name="Matching Boxes" component={MatchingBoxesGameScreen}/>
            <Screen name="Min Finder" component={MinFinderGameScreen}/>
            <Screen name="TicTac" component={TicTacGameScreen}/>
            <Screen name="Login" component={LoginScreen}/>
            <Screen name="Profile" component={ProfileScreen}/>
            <Screen name="Statistics" component={StatisticsScreen}/>
            <Screen name="Alpha Reflex" component={AlphaRefGame}/>

        </Navigator>
    </NavigationContainer>
);
