import React from 'react';
import { StyleSheet, View,TouchableOpacity,TouchableNativeFeedback,Platform} from 'react-native';
import {CustomBtn, CustomText} from "../../components";


export const About = ({navigation}) => {
   return (
       <View >
       <View style={styles.info}>
        <CustomText style={styles.infoHeader}>About</CustomText>
        <CustomText style={styles.infoText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur commodi consectetur consequuntur cum dolores eaque error,</CustomText>
       </View>
    <View style={styles.footer}>
        <CustomBtn title={'SignUp'} onPress={() => navigation.navigate("Login")}/>
     </View>
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
        fontWeight: 'bold',
        paddingTop:20,
    },
    infoText:{
        fontSize: 12,
    },
    footer:{
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

});