import React from 'react';
import { StyleSheet,  View ,ScrollView,TouchableOpacity} from 'react-native';
import { connect } from "react-redux";


import {GameInfo} from "./GameInfo";
import { About } from "./About"
import { Welcome } from "./Welcome"
import  { Nav } from "../../navigation/Nav"
import {Games} from "../../utils/gamesList";
import {getUserCredentials} from "../../store/userCredentials"
import  {CustomHeader} from "../../components"
import { Home } from "./Home"
import {UserHome} from "./UserHome";

const mapStateToProps = (state) => ({
    userCredentials: getUserCredentials(state),
});


export const HomeScreen = connect(mapStateToProps)(({navigation,userCredentials}) => {


  return (
      <View style={styles.container}>

        {
            !userCredentials.fullName ?
              <Home navigation={navigation}/>
              :
              <UserHome navigation={navigation} userCredentials={userCredentials}/>

      }
    </View>
  )
});

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
});
