import React from 'react';
import { StyleSheet,  View ,ScrollView,TouchableOpacity} from 'react-native';

import {CustomHeader, CustomText} from "../../components"
import {Welcome} from "./Welcome";
import {Nav} from "../../navigation/Nav";
import { Game } from "./Game"
import {Games} from "../../utils/gamesList";
import {randomInt} from "../../utils/randomInt";




export const UserHome = ({navigation,userCredentials}) => {

    const logic = Games.filter((g) => g.category === "logical thinking");
    const attention = Games.filter((g) => g.category === "attention");
    const speed = Games.filter((g) => g.category === "speed");
    const memory = Games.filter((g) => g.category === "memory");

    const logicGame = randomInt(0,logic.length-1);
    const attentionGame = randomInt(0,attention.length-1);
    const speedGame = randomInt(0,speed.length-1);
    const memoryGame = randomInt(0,memory.length-1);

    return (
        <View style={styles.container}>
            <CustomHeader name={"Home"} navigation={navigation}/>
            <ScrollView >
                <Welcome name={userCredentials.fullName} />
                <CustomText style={styles.text}>We prepared 4 games for you! Ayan bura qeşeng sözler tap pls :D </CustomText>
                <View style={styles.games}>
                    <Game
                        game={logic[logicGame]}
                        navigation={navigation}/>
                    <Game
                        game={attention[attentionGame]}
                        navigation={navigation}/>
                </View>
                <View style={styles.games}>
                    <Game
                        game={speed[speedGame]}
                        navigation={navigation}/>
                    <Game
                        game={memory[memoryGame]}
                        navigation={navigation}/>

                </View>


            </ScrollView>
            <Nav navigation={navigation}/>
        </View>

    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#edf9fa",
        paddingBottom: 60
    },
    text:{
        fontSize : 17,
        paddingHorizontal: 15,
        marginBottom: 15
    },
    games: {
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "center"

    }
});