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

const mapStateToProps = (state) => ({
    userCredentials: getUserCredentials(state),
});


export const HomeScreen = connect(mapStateToProps)(({navigation,userCredentials}) => {
  return (
      <View style={styles.container}>

          <CustomHeader name={"Home"} navigation={navigation}/>
          <ScrollView style={styles.games}>
              {
                  userCredentials.fullName ? <Welcome name={userCredentials.fullName} /> :
                      <About navigation={navigation}/>

              }
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
});

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#eee",
        paddingBottom: 60,
    },
});
