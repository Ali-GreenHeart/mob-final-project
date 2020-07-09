import React from 'react';
import { StyleSheet, View, Image,TouchableWithoutFeedback } from 'react-native';
import { CustomText } from "../../components"

export const Game = ({name,img}) => {
    return(


        <View  style={styles.game}>

            <Image style={styles.gameImg}
                   source={img}/>

            <View style={styles.text}>

                <CustomText weight={"bold"} style={styles.name}>{name}</CustomText>
                <CustomText weight={"semi"} style={styles.name}>0</CustomText>

            </View>



        </View>

    )
};
const styles= StyleSheet.create({
    game:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems:'center',
        marginHorizontal: 15,
        marginVertical: 5,
        padding:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    gameImg: {
        width: "35%",
        height: 100,
    },
    text: {
        padding: 10,
        position: 'absolute',
        alignItems: 'center'
    },
    name: {
        textTransform: "uppercase",
        fontSize : 15
    },


});
