import React from 'react';
import { StyleSheet, View,TouchableOpacity,TouchableNativeFeedback,Platform} from 'react-native';
import {CustomBtn, CustomText} from "../../components";
import {Image} from "react-native-web";


export const Welcome = ({name,img}) => {
    return (

            <View style={styles.container}>
                <CustomText style={styles.infoHeader}>Welcome {name}!</CustomText>
                {
                    img ? <Image scr={img} style={styles.img}/> : null
                }

            </View>


    )
};

const styles = StyleSheet.create({
    container:{
        flexDirection: "row"
    },
    img: {
        width: "30%",
    }

});