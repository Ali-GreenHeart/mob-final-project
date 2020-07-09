import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { CustomText } from "../../components"
export const GameInfo = ({name,about,category,img}) => {
    return(


            <View  style={styles.game}>

                    <Image style={styles.gameImg}
                           source={img}/>

                    <View style={styles.text}>
                        <CustomText weight={"bold"} style={styles.name}>{name}</CustomText>
                        <CustomText weight={"semi"} style={styles.category}>{category}</CustomText>
                        <CustomText style={styles.about}>{about}</CustomText>
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
        padding:5,
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
        width: "30%",
        height: 100,
    },
    text: {
        padding: 10
    },
    name: {
        textTransform: "uppercase",
        fontSize : 15
    },
    category: {

    },
    about: {
        fontSize: 8,
        width: 200,
        textAlign: "justify"
    }

});
