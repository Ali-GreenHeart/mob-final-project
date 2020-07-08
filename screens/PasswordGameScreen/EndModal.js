import React from "react";
import { StyleSheet, Modal, View, } from "react-native";
import { CustomText, CustomBtn } from "../../components";


export const EndModal = ({ isWin, close, visible,numbers, steps,navigation}) => {
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.card}>
          <CustomText style={styles.header} weight="bold">
            You {isWin ? "found the password!" : "give up"}
          </CustomText>
          <CustomText weight="semi" style={styles.password}>
            The password was {numbers}
          </CustomText>
          
            {
              isWin ? 
              <View style={styles.text}>
                <CustomText>You found the password in </CustomText>   
                <CustomText weight="bold" style={styles.steps}>{steps}</CustomText> 
                <CustomText>steps!</CustomText>              
              </View>
              : 
              <View style={styles.text}>
                <CustomText>You tried  </CustomText>   
                <CustomText weight="bold" style={styles.steps}>{steps}</CustomText> 
                <CustomText>times!</CustomText>              
              </View>
             
            }
          
         
          <CustomBtn title="Replay" onPress={close} style={styles.btn}/>
          <CustomBtn title="Exit" onPress={() => {close(); navigation.navigate("Home");}} style={styles.btn}/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 300,
    padding: 30,
    borderRadius: 15,
    backgroundColor: "white",
    alignItems: "center",
  },
  password: {

  },
  steps: {
    fontSize: 30,  
  },
  text: {
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    width: 100,
    marginVertical: 5
  }
});
