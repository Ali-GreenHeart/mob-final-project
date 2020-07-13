import React from 'react';
import { StyleSheet, View, Image,TouchableOpacity } from 'react-native';
import { CustomText } from "../../components"
import {COLORS} from "../../styles/colors";

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
        backgroundColor: '#fff',
        justifyContent: "center",
        width: 150,
        height: 200,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,
        margin : 10
    },
    gameImg: {
        width: 110,
        height: 100,
        alignSelf: "center"
    },
    text: {
        marginTop:5,
        padding: 10,
        alignItems: 'center'
    },
    name: {
        textTransform: "uppercase",
        fontSize : 12,
        color: COLORS.mainBg,
        marginBottom:5,
    },
    category: {
        fontSize: 10,
        color: COLORS.mainWarning
    }


});
