import React, {useState} from 'react';
import { StyleSheet,  View, TouchableOpacity,  } from 'react-native';

import  { Games } from "../../utils/gamesList"
import  { CategoryHeader } from "./CategoryHeader"
import  { Game } from "./Game"


export const AllGamesScreen = ({navigation}) => {

    const categories = ["attention", "logical thinking","memory","speed"];

    return (

        <View style={styles.container}>
            {
                categories.map((c) =>
                    <View style={{width: "100%"}}>
                        <CategoryHeader name={c}/>
                        {
                            Games.filter((game) => game.category === c)
                                .map((g) =>
                                 <TouchableOpacity onPress={() => navigation.navigate(g.name)}>
                                     <Game name={g.name} img={g.img}/>
                                 </TouchableOpacity>

                                )

                        }
                    </View>

                )
            }
          </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 15,
    },

});
