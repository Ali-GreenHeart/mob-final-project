import React from 'react';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import {GameInfo} from "./GameInfo";
import {CustomBtn,CustomHeader} from "../../components";
import { Nav } from '../NavBar/Nav';
import {Games} from "../../utils/gamesList";


export const HomeScreen = () => {
  return (
      <View style={styles.container}>
          <CustomHeader name={"Home"} />

       <ScrollView>
      <View style={styles.info}>
          <Text style={styles.infoHeader}>About</Text>
          <Text style={styles.infoText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur commodi consectetur consequuntur cum dolores eaque error, eveniet hic libero modi mollitia numquam quas quis, repudiandae rerum velit, voluptas voluptate.</Text>
      </View>
          <View style={styles.footer}>
              <CustomBtn title={'SignUp'}/>
          </View>
          <View style={styles.games}>
              {
                  Games.map((g) =>
                    <GameInfo
                        key={g.id}
                        category={g.category}
                        name={g.name}
                        about={g.about}
                        img={g.img}
                    />
                  )
              }
          </View>
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
    },
    footer:{
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});