import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const HomePageScreen =()=>{
    return(
        <View style= {styles.container}><Text>HomePageScreen</Text></View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
    },
});