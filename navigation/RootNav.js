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
} from "../screens";


const {Navigator,Screen} = createStackNavigator();
export const RootNav = () => (
    <NavigationContainer>
        <Navigator>
            <Screen name="Home" component={HomeScreen}/>
            <Screen name="GameScreen" component={GameScreen}/>
            <Screen name="Password" component={PasswordGameScreen}/>
            <Screen name="Color" component={ColorGameScreen}/>
            <Screen name="Memory Grid" component={MemoryGridGameScreen}/>
            <Screen name="Traffic Light" component={TrafficLightGameScreen}/>
        </Navigator>
    </NavigationContainer>
);
