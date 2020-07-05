import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {GameScreen} from "../screens";
import {Index} from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();
export const Tabs=() =>{
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Index} />
            <Tab.Screen name="go-to-Game" component={GameScreen} />
        </Tab.Navigator>
    );
};