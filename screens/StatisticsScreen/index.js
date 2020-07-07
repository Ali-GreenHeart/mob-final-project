import React, {useState} from 'react';
import { StyleSheet, Text, View,  } from 'react-native';

import {Nav} from "../../navigation/Nav";

export const StatisticsScreen = ({navigation}) => {



    return (
        <View style={styles.container}>
            <Text>statictics screen</Text>
            <Nav navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
   container: {
       alignItems: "center",
       justifyContent: "center"
   }
});
