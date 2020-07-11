import React from 'react';
import { StyleSheet,  View, Image,  ScrollView} from 'react-native';

import {CustomText, CustomBtn,  CustomHeader,CustomLinear,BackgroundBubbles} from '../components'
import {COLORS} from "../styles/colors";

export const GameScreen = ({route,navigation}) => {

    const { game } = route.params;


    return (
    <View style={styles.container}>

        <CustomLinear>
            <BackgroundBubbles/>
            <CustomHeader navigation={navigation} back={true}/>

            <ScrollView>
                <CustomText style={styles.title} weight="bold">{game.name}</CustomText>
                <Image style={styles.img} source={game.img}/>
                <CustomText style={styles.about} weight="medium" >{game.howToPlay}</CustomText>
                <CustomBtn
                    style = {styles.btn}
                    title= "play"
                    onPress={() => navigation.navigate(game.name)}
                    color={COLORS.secondWarning}
                />
            </ScrollView>
        </CustomLinear>




    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",

  },
  title: {
      fontSize:40,
      marginVertical: 30,
      color: "#fff",
      alignSelf: "center",

  },
  img: {
      width: 150,
      height: 150,
      borderRadius: 10,
      alignSelf: "center"

  },
  about: {
      textAlign : "justify",
      marginVertical: 30,
      marginHorizontal: 50
  },
    btn:{
      marginHorizontal: 50,
        marginBottom: 30
    }
});
