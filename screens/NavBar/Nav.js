import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons as Icon} from 'react-native-vector-icons';

export const Nav=()=>{
    return (
        <View style={styles.color}>

        <TouchableOpacity >
        <Icon name="home-circle" style={styles.img} />
        </TouchableOpacity>
            <TouchableOpacity >
            <Icon name="gamepad-variant" style={styles.img} />
            </TouchableOpacity>
            <TouchableOpacity >
            <Icon name="chart-bar" style={styles.img} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Icon name="account-circle" style={styles.img} />
            </TouchableOpacity>

            </View>
    );
};
const styles= StyleSheet.create({

    color:{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        paddingTop:10
    },

    img: {
        fontSize:60,
        marginLeft: 5,
        marginRight: 44
    }

});
