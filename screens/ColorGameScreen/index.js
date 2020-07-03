import React, { useState,useEffect,useRef} from 'react';
import { StyleSheet,  View, TouchableOpacity,Image } from 'react-native';

import { randomInt  } from "../../utils/randomInt"
import { createNumber  } from "../../utils/createNumber"
import { CustomText,CustomBtn } from '../../components'
import {ColorCard} from "./ColorCard"
import {EndModal} from "./EndModal"

const randomInd = () => {
        const length = Colors.length;
        return createNumber(1,length)
    }
  
export const Colors =  ["black","brown","purple","green","grey","red","blue","yellow","pink","orange"]

export const ColorGameScreen = ( ) => {

   const [modal, setModal] = useState(false)
   const [color, setColor] = useState( Colors[randomInd()]);
   const [name, setName] = useState( Colors[randomInd()]);
   const [boxColor, setBoxColor] = useState([color,name]);
   const [points, setPoints] = useState(0);
   const [wrongs, setWrongs] = useState(0);

   const box = boxColor[createNumber(1,2)];
   const openedTimer = useRef(null);

   
   const clickHandler = (value) => {
    const randomColor = Colors[randomInd()];
    const randomName = Colors[randomInd()]
    setColor(randomColor);
    setName(randomName);
    setBoxColor([randomColor,randomName]);
    
    if(value === "yes"){
         if(box === name) {
             setPoints(points+1);
         }
         else {
            setWrongs(wrongs+1);
         }
     }
     if(value === "no"){
        if(box === color) {
            setPoints(points+1);
        }
        else {
            setWrongs(wrongs+1);
        }
    }
    if(wrongs === 4) {
        setModal(true)
    }

   };

   const resetGame = () => {
    setModal(false);
    setPoints(0);
    gameTimer();
   }; 


   const gameTimer = () => {
    if (openedTimer.current) {
        clearTimeout(openedTimer.current);
      }
      openedTimer.current = setTimeout(() => setModal(true), 20000);
     }

   useEffect(() => {
    gameTimer();
  }, []);


   return( 

    <View style={styles.container}>
            <CustomText weight="bold">
                {points} / {wrongs}
            </CustomText> 

        <ColorCard
         color= {color}
         name={name}
         box={box}
         />

        <View style={styles.btnContainer}> 
                             
            <CustomBtn
             color="red"
             style={styles.btn}
             title="No"
             onPress={()=> {clickHandler("no");}}
             />
            <CustomBtn
            color="green"
             style={styles.btn} 
             title="yes" 
             onPress={()=> {clickHandler("yes")}}/>
        </View>
        <EndModal  
          visible={modal}
          close={() => resetGame()}
          points={points}
        />
       </View>
   
  )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#edf9fa"
    },

    btn: {
       width: 100,
       margin: 10
    },
    btnContainer: {
        flexDirection: "row"
    }
});