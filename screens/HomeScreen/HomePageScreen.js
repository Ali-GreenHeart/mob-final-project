import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {HomeHeader} from "./HomeHeader";
import {GameInfo} from "./GameInfo";
import {HomeFooter} from "./HomeFooter";

export const HomePageScreen =()=>{
    return<View style= {styles.container}>
            <HomeHeader/>
            //Not developed yet
            <GameInfo/>
            <HomeFooter/>
        </View>;
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
});