import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';

import  { CustomText } from "../components"

export const CustomHeader = ({name}) => {
    return(
        <View style={styles.header}>
            <CustomText style={styles.headerText} weight={"medium"}>{ name }</CustomText>
        </View>)
};
const styles= StyleSheet.create({
    headerText:{
        fontSize:20,
    },
    header:{
        marginTop: 30,
        backgroundColor: 'gray',
        justifyContent:'center',
        alignItems: "center",
        padding: 10,

    },
});
