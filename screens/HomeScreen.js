import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const HomeScreen =()=>{
  return(
      <View style= {styles.container}><Text>HomeScreen</Text></View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
    },
});