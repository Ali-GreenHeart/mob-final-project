import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ImagePropTypes } from 'react-native';

import { CustomText, CustomBtn, RadioGroup } from '../components'

export const GameScreen = ({route,navigation}) => {

    const { game } = route.params;


    return (
    <View style={styles.container}>
        <CustomText style={styles.title} weight="bold">{game.name}</CustomText>
        <Image style={styles.img} source={game.img}/>
        <CustomText style={styles.about} weight="medium" >{game.howToPlay}</CustomText>

        <CustomBtn
         title= "play"
         onPress={() => navigation.navigate(game.name)}
         />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 100,
    justifyContent: "center"
  },
  title: {
      fontSize:40,
      marginVertical: 15

  },
  img: {
      width: 150,
      height: 150,
      borderRadius: 75,
      backgroundColor: "#eee"
  },
  about: {
      textAlign : "justify",
      marginVertical: 20
  }
});
