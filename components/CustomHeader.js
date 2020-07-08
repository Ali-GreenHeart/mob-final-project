import React from 'react';
import { StyleSheet, View,Image, TouchableOpacity  } from 'react-native';

import  { CustomText } from "../components"
import arrowImg from "../assets/backArrow.png"

export const CustomHeader = ({name,navigation,back}) => {
    return(
        <View style={styles.header}>
            {
                back ?
                    <TouchableOpacity style={styles.imgBtn} onPress={() => navigation.goBack()}>
                        <Image source={arrowImg} style={styles.imgBtn}/>
                    </TouchableOpacity>
                    : null
            }

            <CustomText style={styles.headerText} weight={"medium"}>{ name }</CustomText>
        </View>)
};
const styles= StyleSheet.create({

    header:{
        marginTop: 25,
        backgroundColor: 'gray',
        justifyContent:'center',
        alignItems: "center",
        padding: 15,
        flexDirection: "row"

    },
    imgBtn: {
        position: "absolute",
        left: 5,
        width: 25,
        height: 20
    },
    headerText:{
        fontSize:20,
        color: "#fff"
    },
});
