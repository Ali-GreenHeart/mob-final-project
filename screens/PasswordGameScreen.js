import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Dimensions } from 'react-native';

import { createNumber } from "../utils/createNumber"

const buttons = [ 1, 2, 3, 4, 5, 6, 7, 8,9, "C", 0, "OK"];


export const PasswordGameScreen = () => {
 
  const [numbers,setNumbers] = useState(createNumber(4));
  const [input,setInput] = useState([]);
  const [silver,setSilver] = useState(0);
  const [gold,setGold] = useState(0) ;
  const [size,setSize] = useState(4)

  const goldCount = () => {    
    let s = 0;
    for(const num of input){
      if(numbers.includes(num)) {
        s++;
      }
    } 
    setSilver(s);    
  }

  const silverCount = () => {    
    let g = 0;
    for(let i = 0; i <input.length; i++){
      if(input[i] === numbers[i]) {
        g++;
      }
    } 
    setGold(g);    
  }

  const buttonHandler = (btn) => {
       
    if(btn === "C") {
      setInput([])
    }

    else if(btn === "OK") {
      
      if(input.length < 4) {
        setDisabled(true)
      }
      else {
        goldCount(); 
        silverCount();
        setInput([]);
      }     
    }

    else {
      setInput([...input, btn]);   
    }  
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Gues the password
        </Text>
      </View>

      <Text>number: { numbers }</Text>
      <View style={styles.inputContainer}>
      <Text style={styles.input}> {input[0]} </Text>
      <Text style={styles.input}> {input[1]} </Text>
      <Text style={styles.input}> {input[2]} </Text>
      <Text style={styles.input}> {input[3]} </Text>

        {/* {
          input.map((i) => {
            return  <Text style={styles.input}>
                       {i}
                    </Text>

          })
        } */}
      </View>
    
      <Text>silver { silver }</Text>
      <Text>gold { gold }</Text>

      <View style={styles.buttonsContainer}>
      
        {
          buttons.map((btn) => {
            return(
              <TouchableOpacity
               key={btn} 
               onPress={() => {buttonHandler(btn)}} 
               >
                <View style={styles.btn} >
                  <Text style={styles.btnTitle}>
                    {btn}
                  </Text>
                </View>
              </TouchableOpacity>
              
            )
            
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  header: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red"
  },
 
  title: {
    color: "white",
    fontSize: 30,
    fontWeight : "bold"
  },
  inputContainer: {
    flexDirection: "row",
  }, 
  input: {  
    height: 50,
    backgroundColor: "#eee",
    fontSize: 20,
    textAlign: "center",
    paddingHorizontal: 15,
    marginHorizontal:10,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonsContainer: {  
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
      backgroundColor: "green",
      width: 90,
      margin: 10,
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: "center"

  },
  btnTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: "white"
  }
});



