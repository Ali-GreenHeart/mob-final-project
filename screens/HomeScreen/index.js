import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {HomeHeader} from "./HomeHeader";
import {GameInfo} from "./GameInfo";
import {CustomBtn} from "../../components";


export const HomeScreen =()=>{
  return<View style={styles.container}>
          <HomeHeader/>
      <View style={styles.info}>
          <Text style={styles.infoHeader}>About</Text>
          <Text style={styles.infoText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur commodi consectetur consequuntur cum dolores eaque error, eveniet hic libero modi mollitia numquam quas quis, repudiandae rerum velit, voluptas voluptate.</Text>
      </View>
          <GameInfo/>
      <View style={styles.footer}>
          <CustomBtn title={'SignUp'}/>
      </View>
  </View>;
};

const styles = StyleSheet.create({
    container:{
        flex:1,

    },

    info:{
        flex: 3,
        paddingStart: 20,
    },
    infoHeader:{
        flex:1,
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop:20,
    },
    infoText:{
        flex:2,
    },
    footer:{
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
    },
});