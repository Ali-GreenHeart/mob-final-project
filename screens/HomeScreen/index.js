import React from 'react';
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
import { connect } from "react-redux";


import {GameInfo} from "./GameInfo";
import { About } from "./About"
import { Welcome } from "./Welcome"
import {CustomText} from "../../components";
import  { Nav } from "../../navigation/Nav"
import {Games} from "../../utils/gamesList";
import {getUserCredentials} from "../../store/userCredentials"

const mapStateToProps = (state) => ({
    userCredentials: getUserCredentials(state),
});


export const HomeScreen = connect(mapStateToProps)(({navigation,userCredentials}) => {
  return (
      <View style={styles.container}>
          <CustomText style={{backgroundColor: "red"}}>{userCredentials.fullName}</CustomText>
          {
              userCredentials.fullName ? <Welcome name={userCredentials.fullName}/> :
                  <About/>

          }


          <ScrollView style={styles.games}>
              {
                  Games.map((g) =>
                     <TouchableOpacity
                         key={g.id}
                         onPress={() => navigation.navigate("GameScreen",{
                             game: g
                         })}
                     >
                         <GameInfo
                             category={g.category}
                             name={g.name}
                             about={g.about}
                             img={g.img}
                         />
                     </TouchableOpacity>

                  )
              }
          </ScrollView>
          {
              userCredentials.fullName ? <Nav navigation={navigation}/> : null
          }

  </View>
  )
})

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#eee"
    },


});