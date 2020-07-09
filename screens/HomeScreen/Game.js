import React from 'react';
import { StyleSheet, View, Image,TouchableOpacity } from 'react-native';
import { CustomText } from "../../components"

export const Game = ({game,navigation}) => {
    return(
        <View  style={styles.game}>
            <TouchableOpacity
                style={{width: "100%"}}
                onPress={() => navigation.navigate("GameScreen",{
                    game: game
                })}
            >
                <Image style={styles.gameImg}
                       source={game.img}/>

                <View style={styles.text}>
                    <CustomText weight={"bold"} style={styles.name}>{game.name}</CustomText>
                    <CustomText weight={"medium"} style={styles.category}>{game.category}</CustomText>
                </View>
            </TouchableOpacity>

        </View>

    )
};
const styles= StyleSheet.create({
    game:{
        backgroundColor: '#eee',
        justifyContent: "center",
        width: "47%",
        margin: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 8,

    },
    gameImg: {
        width: "99%",
        height: 170,
        alignSelf: "center"
    },
    text: {
        padding: 10,
        alignItems: 'center'
    },
    name: {
        textTransform: "uppercase",
        fontSize : 12
    },
    category: {
        fontSize: 10
    }


});
