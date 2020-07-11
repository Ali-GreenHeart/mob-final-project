import React from 'react';
import { StyleSheet, View,TouchableOpacity,TouchableNativeFeedback,Platform} from 'react-native';

import {CustomBtn, CustomText} from "../../components";
import { COLORS } from "../../styles/colors"

export const About = ({navigation}) => {
   return (
       <View >
       <View style={styles.info}>
        <CustomText weight={"semi"}  style={styles.infoHeader}>About App</CustomText>
        <CustomText style={styles.infoText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur commodi consectetur consequuntur cum dolores eaque error,</CustomText>
       </View>
        <CustomBtn
            style={styles.btn}
            title={'Sign Up'}
            onPress={() => navigation.navigate("Login")}
            color={COLORS.secondWarning}
        />
     </View>
   )
};

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        overflow:"hidden",
        borderRadius:50
    },
    info:{
        paddingStart: 20,
    },
    infoHeader:{
        fontSize: 25,
        paddingTop:20,
        color: "#fff"
    },
    infoText:{
        fontSize: 14,
        color: "#fff",

    },
    btn:{
        marginVertical: 10,
        width: "50%",
        alignSelf: "center"

    },

});