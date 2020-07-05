import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export const About=()=>{
    return<View style={styles.info}>
        <Text style={styles.infoHeader}>About</Text>
        <Text style={styles.infoText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur commodi consectetur consequuntur cum dolores eaque error, eveniet hic libero modi mollitia numquam quas quis, repudiandae rerum velit, voluptas voluptate.</Text>
    </View>
};
const styles= StyleSheet.create({
    info:{
        flex: 3,
        paddingStart: 20,
    },
    infoHeader:{
        flex:1,
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop:20,
    },
    infoText:{
        flex:2,
    },
});
