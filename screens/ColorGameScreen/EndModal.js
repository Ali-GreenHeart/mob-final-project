import React from "react";
import { StyleSheet, Modal, View, Text, Button, Image } from "react-native";

import {CustomText,CustomBtn} from "../../components"

export const EndModal = ({points, close, visible }) => {


  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={styles.container}>
        <View style={styles.card}>
          <CustomText>Time's out!</CustomText>
          <CustomText weight="bold" style={styles.score}>{points}</CustomText>
          <Image style={styles.image}  />
          <CustomBtn  title="Replay" onPress={close} style={styles.btn}/>
          <CustomBtn title="Exit" style={styles.btn}/>
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
    fontSize: 50
  },
  btn: {
    marginVertical: 10
  }
});
