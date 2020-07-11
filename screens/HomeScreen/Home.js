import React from 'react';
import { StyleSheet,  View ,ScrollView,TouchableOpacity} from 'react-native';

import {GameInfo} from "./GameInfo";
import { About } from "./About"
import {Games} from "../../utils/gamesList";
import  {CustomHeader} from "../../components"


export const Home = ({navigation}) => {

    const games = Games.slice(0,4);

    return (
        <View style={styles.container}>
           <CustomHeader name={"Home"} navigation={navigation}/>
                <ScrollView style={styles.games}>
                 <About navigation={navigation}/>
                  {
                     games.map((g) =>
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
    },
});
