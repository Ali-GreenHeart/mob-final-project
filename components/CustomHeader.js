import React from 'react';
import { StyleSheet, View,Image, TouchableOpacity  } from 'react-native';

import  { CustomText } from "./CustomText"
import arrowImg from "../assets/backArrow.png"
import {COLORS} from "../styles/colors";

export const CustomHeader = ({name,navigation,back, setPhoto,onPress}) => {
    return(
        <View style={styles.wrapper}>
            <View style={styles.header}>
                {
                    back ?
                        <TouchableOpacity style={styles.imgBtn} onPress={() => navigation.goBack()}>
                            <Image source={arrowImg} style={styles.imgBtn}/>
                        </TouchableOpacity>
                        : null
                }
                <CustomText style={styles.headerText} weight={"semi"}>{ name }</CustomText>
                {
                    setPhoto &&  <TouchableOpacity style={styles.close} onPress={onPress}>
                        <CustomText style={styles.close} weight={"medium"}>close</CustomText>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
};
const styles= StyleSheet.create({
    wrapper: {
        backgroundColor: COLORS.mainBg
    },
    header:{
        marginTop: 25,
        backgroundColor: COLORS.mainBg,
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
    close: {
        position: 'absolute',
        right: 5,
        color: 'white',
        fontSize: 20,
        top: 7,
        zIndex: 10
    }
});
