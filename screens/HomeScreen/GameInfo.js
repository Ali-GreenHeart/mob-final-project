import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Games} from "../../utils/gamesList";

export const GameInfo=()=>{
    return<View style={styles.gamePanel}>
        {
            Games.map(game=>{
                return<View key={game.id} style={styles.game}>
                    <Image style={styles.gameImg} source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}/>
                    <Text  style={styles.gameInfo}>{game.about}</Text>

                </View>
            })
        }
    </View>
};
const styles= StyleSheet.create({
        game:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#ffe237',
        alignItems:'center',
    },
    gamePanel:{
        flex:5,
    },
    gameImg:{

        flex:1,
        height:70,
        marginHorizontal:15,
        borderRadius: 25,
    },
    gameInfo:{
        flex:4,
    },
});
