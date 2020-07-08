import React, {useState} from 'react';
import { StyleSheet, Text, View,  } from 'react-native';

import {Nav} from "../../navigation/Nav";
import {CustomHeader} from "../../components";

export const StatisticsScreen = ({navigation}) => {



    return (
        <View style={styles.container}>
            <CustomHeader name={"Home"} navigation={navigation} back={true}/>

            <Text>statictics screen</Text>
            <Nav navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
   container: {

   }
});
