import React from 'react';
import { StyleSheet, View,TouchableOpacity,TouchableNativeFeedback,Platform} from 'react-native';

import {CustomBtn, CustomText} from "../../components";
import { COLORS } from "../../styles/colors"

export const About = ({navigation}) => {
   return (
       <View >
       <View style={styles.info}>
        <CustomText weight={"semi"}  style={styles.infoHeader}>Noetic</CustomText>
        <CustomText style={styles.infoText}>Deep dive into intelligence</CustomText>
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
