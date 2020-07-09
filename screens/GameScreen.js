import React from 'react';
import { StyleSheet,  View, Image,  } from 'react-native';

import {CustomText, CustomBtn,  CustomHeader} from '../components'

export const GameScreen = ({route,navigation}) => {

    const { game } = route.params;


    return (
    <View style={styles.container}>
        <CustomHeader name={game.name} navigation={navigation} back={true}/>

        <View>
            <CustomText style={styles.title} weight="bold">{game.name}</CustomText>
            <Image style={styles.img} source={game.img}/>
            <CustomText style={styles.about} weight="medium" >{game.howToPlay}</CustomText>
            <CustomBtn
                style = {styles.btn}
                title= "play"
                onPress={() => navigation.navigate(game.name)}
            />
        </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
    backgroundColor: '#fff',
  },
  title: {
      fontSize:40,
      marginVertical: 30,
      alignSelf: "center"

  },
  img: {
      width: 150,
      height: 150,
      borderRadius: 10,
      backgroundColor: "#eee",
      alignSelf: "center"

  },
  about: {
      textAlign : "justify",
      marginVertical: 30,
      marginHorizontal: 50
  },
    btn:{
      marginHorizontal: 50
    }
});
