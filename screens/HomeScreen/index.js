import React from 'react';
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
import {GameInfo} from "./GameInfo";
import {CustomBtn,CustomHeader,CustomText} from "../../components";
import {Games} from "../../utils/gamesList";


export const HomeScreen = ({navigation}) => {
  return (
      <View style={styles.container}>
      <View style={styles.info}>
          <CustomText style={styles.infoHeader}>About</CustomText>
          <CustomText style={styles.infoText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur commodi consectetur consequuntur cum dolores eaque error,</CustomText>
      </View>
          <View style={styles.footer}>
              <CustomBtn title={'SignUp'}/>
          </View>
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

  </View>
  )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#eee"
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