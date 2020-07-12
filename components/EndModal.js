import React from "react";
import { StyleSheet, Modal, View } from "react-native";
import {CustomText} from "./CustomText";
import {CustomBtn} from "./CustomBtn"
import {COLORS} from "../styles/colors";

export const EndModal = ({points, close, visible ,navigation ,win}) => {


  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.card}>
          {
            win ?

                <CustomText>You win!</CustomText>:
                <CustomText>Time's out!</CustomText>
          }

          <CustomText weight="bold" style={styles.score}>Your score: {points}</CustomText>
          <View style={styles.btnContainer}>
            <CustomBtn title="Replay" onPress={close} style={styles.btn} color={COLORS.secondWarning}/>
            <CustomBtn title="Exit" onPress={() => {close(); navigation.navigate("Home");}} style={styles.btn} color={COLORS.secondWarning}/>
          </View>
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
  image: {
    width: 150,
    height: 150,
    marginVertical: 15,
    backgroundColor: "#eee"
  },
  score: {
    fontSize: 27,
    marginVertical: 10
  },
  btnContainer: {
    flexDirection: "row",
    borderTopColor: '#74B9FF',
    borderTopWidth: 1,
    paddingTop:3
  },
  btn: {
    width: 100,
    margin: 10
  }
});
