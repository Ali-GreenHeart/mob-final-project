import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ImagePropTypes } from 'react-native';

import { CustomText, CustomBtn, RadioGroup } from '../components'

 const game = {
    gameTitle: "password",
    about: "Lorem ipsum dolor sit amet,ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

export const GameScreen = () => {
  
  const [mode ,setMode] = useState("")  
  const options = ["easy", "medium", "hard"];

  const onValueChange = (value) => {
      setMode(value)
  }

  return (
    <View style={styles.container}>
        <CustomText style={styles.title} weight="bold">{game.gameTitle}</CustomText>
        <Image style={styles.img}/>
        <CustomText style={styles.about} weight="medium" >{game.about}</CustomText>
        <RadioGroup
         options={options}
         value={mode}
         onValueChange={onValueChange}
        />
        <CustomBtn
         title= "play"
    
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
