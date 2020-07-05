import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {HomeHeader} from "./HomeHeader";
import {About} from "./About";
import {GameInfo} from "./GameInfo";
import {HomeFooter} from "./HomeFooter";
import {Nav} from "../NavBar/Nav"

export const HomeScreen =()=>{
  return<View style={styles.container}>
          <HomeHeader/>
          <About/>
          <GameInfo/>
          <HomeFooter/>
          <Nav/>
  </View>;
};

const styles = StyleSheet.create({
    container:{
        flex:1,

    },

});