import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const HomeHeader=()=>{
    return<View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
    </View>;
};
const styles= StyleSheet.create({
    headerText:{
        fontSize:40,
    },
    header:{
        backgroundColor: '#00ff7b',
        flex: 1,
        justifyContent:'center',
        paddingLeft: 30,
        borderRadius: 20,
    },
});
