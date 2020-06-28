import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

import { createNumber } from "../../utils/createNumber"
import { CustomText } from "../../components";
import { EndModal } from "./EndModal"

const buttons = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0,];

const mode="easy"
export const PasswordGameScreen = () => {

  const setPasswordSize = () => {
    if(mode === "easy") {
      return 4
    }
    else if(mode === "medium") {
      return  5
    }
    else if(mode === "hard") {
      return 6
    } 
  };

  const [size,setSize] = useState(setPasswordSize());
  const [numbers,setNumbers] = useState(createNumber(size,10));
  const [input,setInput] = useState([]);
  const [yellow,setYellow] = useState(0);
  const [green,setGreen] = useState(0) ;
  const [modal, setModal] = useState(false)
  const history = useState([{
    inputs: [],
    y: null,
    g: null
  }])


  const yellowCount = () => {    
    let y = 0;
    for(const num of input){
      if(numbers.includes(num)) {
        y++;
      }
    } 
    setYellow(y);    
  };

  const greenCount = () => {    
    let g = 0;
    for(let i = 0; i <input.length; i++){
      if(input[i] === numbers[i]) {
        g++;
      }
    } 
    setGreen(g);    
  };

  const numberButtonHandler = (btn) => {   
      setInput([...input, btn]);   
    }
  
  const submitButtonHandler = () => {
    if(input.length === size)
    {
      yellowCount();
      greenCount();
      setInput("")
      setHistory([
        {
          inputs: input,
          y: yellow,
          g: green
        },
        ...history
      ])
    }        
  } 

  const resetGame = () => {
    setModal(false);
    setInput("");
    setNumbers(createNumber(size,10));
  }


  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Gues the password
        </Text>
      </View>

      <Text>number: { numbers }</Text> 
      <ScrollView>
         {
        history.map((h) => {
          return  <View >
          <Text >
            {h.inputs}
          </Text>
          <Text >
            {h.y}
          </Text>
          <Text >
            {h.g}
          </Text>
        </View>
        })
      }
      </ScrollView>
     
      <Text>history: { history.inputs }</Text> 


      <View style={styles.codeContainer}>
        <View style={styles.yellowCode}>
           <CustomText>
               {yellow- green}
           </CustomText>
        </View>
        <View style={styles.greenCode}>
           <CustomText>
               {green}
           </CustomText>
        </View>
      </View>

      <View style={styles.inputContainer}>
        
      <Text style={styles.input}> {input[0]} </Text>
      <Text style={styles.input}> {input[1]} </Text>
      <Text style={styles.input}> {input[2]} </Text>
      <Text style={styles.input}> {input[3]} </Text>
      {
        size === 5 || size === 6 ?
        <Text style={styles.input}> {input[4]} </Text> : null
      }
       {
        size === 6 ?
        <Text style={styles.input}> {input[5]} </Text> : null
      }
      
      </View>

      <View style={styles.buttonsContainer}>
      
        {
          buttons.map((btn) => {
            return(
              <TouchableOpacity
               key={btn} 
               onPress={() => {numberButtonHandler(btn)}}
               disabled={input.length === size ? true : false} 
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
        <TouchableOpacity onPress={() => { setInput("")}}>
          <View style={styles.btn} >
            <Text style={styles.btnTitle}>
              C
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=> submitButtonHandler()}
         disabled={input.length < size ? true : false}
        >
          <View style={styles.btn}>
            <Text style={styles.btnTitle}>
               OK
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <EndModal  
        visible={modal}
        close={() => resetGame()}
       />
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
    backgroundColor: "darkgrey"
  },
 
  title: {
    color: "white",
    fontSize: 30,
    fontWeight : "bold"
  },
  codeContainer: {
    flexDirection: "row",
    width: "50%",
    marginVertical: 20
  },
  yellowCode: {
    width: "50%",
    backgroundColor: "lightyellow",
    padding: 20
  },
  greenCode: {
    width: "50%",
    backgroundColor: "lightgreen",
    padding: 20
  },  
  inputContainer: {
    flexDirection: "row",
  }, 
  input: {  
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: "#eee",
    fontSize: 20,
    padding:10,
    textAlign: "center",
    marginHorizontal:5,
  },
  buttonsContainer: {  
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
      backgroundColor: "grey",
      width: 90,
      margin: 10,
      paddingVertical: 10,
      borderRadius: 10,
      alignItems: "center"

  },
  btnTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: "white"
  }
});



