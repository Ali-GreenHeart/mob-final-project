import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Colors,  } from "../../utils/colorList"
import { createNumber  } from "../../utils/createNumber"

import { CustomText,CustomBtn } from '../../components'


export const ColorGameScreen = ( ) => {

    const randomInd = () => {
        const length = Colors.length;
        return createNumber(1,length)
    }
  
   const [color, setColor] = useState( Colors[randomInd()]);
   const [name, setName] = useState( Colors[randomInd()]);
   const [points, setPoints] = useState(0)

   const clickHandler = (value) => {
    setColor(Colors[randomInd()]);
    setName(Colors[randomInd()]);
    if(value === name) {
        setPoints(points+1);
    }


   }


  return( 
    <View style={styles.container}>
         <CustomText weight="bold">
                {points}
            </CustomText> 
        <View style={styles.colorContainer}>
            <CustomText weight="bold" style={[styles.colorName,{color:color}]}>
                {name}
            </CustomText>    
        </View>

        <View style={styles.btnContainer}>
            <CustomBtn
             style={styles.btn}
             title={color}
             onPress={()=> clickHandler(color)}
             />
            <CustomBtn
             style={styles.btn} 
             title={name} 
             onPress={()=> clickHandler(name)}/>
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
     colorContainer: {
         width: 200,
         height: 200,
         justifyContent:"center",
         alignItems: "center", 
     },
    btn: {
       width: 100,
       margin: 10
    },
    colorName: {
        fontSize: 40,
    },
    btnContainer: {
        flexDirection: "row"
    }
});