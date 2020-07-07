import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {GameScreen,HomeScreen} from "../screens";


const Tab = createBottomTabNavigator();
export const Tabs=() =>{
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="go-to-Game" component={GameScreen} />
        </Tab.Navigator>
    );
};