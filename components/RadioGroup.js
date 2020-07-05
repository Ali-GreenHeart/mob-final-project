import React from "react";
import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";

import { CustomText } from "./CustomText";

export const RadioGroup = ({
  options,
  value,
  onValueChange = () => {},
}) => {


  const radioWidth = Dimensions.get("window").width / 3
  

  return (
    <View style={[styles.container]}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          onPress={() => onValueChange(option)}
          style={[styles.radioItemWrapper]}
        >
          <View
            style={[
              styles.radioItem,
              {
                opacity: option === value ? 1 : 0.5,
              },
            ]}
          >
            <CustomText
              weight={option === value ? "bold" : "regular"}
              style={styles.radioText}
            >
              {option}
            </CustomText>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical:15

  },
  radioItem: {
    height: 42,
    backgroundColor: "#eee",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    margin:5,
    padding: 15
  },
  radioText: {
    fontSize: 10
  }
});
