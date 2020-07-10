import React from 'react';
import { StyleSheet,  View, TouchableOpacity, ScrollView } from 'react-native';

import  { Games } from "../../utils/gamesList"
import  { genID } from "../../utils/genID"

import  { CategoryHeader } from "./CategoryHeader"
import {Nav} from "../../navigation/Nav";
import {CustomHeader} from "../../components";
import {GameInfo} from "../HomeScreen/GameInfo";


export const AllGamesScreen = ({navigation}) => {

    const categories = ["attention", "logical thinking","memory","speed"];

    return (
        <View style={{flex:1}}>
            <CustomHeader name={"All Games"} navigation={navigation} back={true}/>

            <ScrollView style={styles.container}>
            {
                categories.map((c) =>
                    <View style={{width: "100%"}} key={genID()}>
                        <CategoryHeader name={c}/>
                        {
                            Games.filter((game) => game.category === c)
                                .map((g) =>
                                    <TouchableOpacity
                                        key={g.id}
                                        onPress={() => navigation.navigate("GameScreen",{
                                            game: g
                                        })}
                                    >
                                        <GameInfo
                                            name={g.name}
                                            about={g.about}
                                            img={g.img}
                                        />
                                    </TouchableOpacity>

                                )

                        }
                    </View>

                )
            }

          </ScrollView>
            <Nav navigation={navigation}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 5,
        marginBottom: 60,
    },

});
