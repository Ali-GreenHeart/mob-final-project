import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {CustomBtn} from "../../components";

export const HomeFooter=()=>{
    return<View style={styles.footer}>
        <CustomBtn title={'SignUp'}/>
    </View>
};
const styles= StyleSheet.create({
    footer:{
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
