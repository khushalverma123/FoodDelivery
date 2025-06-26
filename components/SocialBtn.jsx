import { View/*  */ } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const SocialBtn = ({ name, bgColor, size = 65 }) => {
  return (
    <View
      style={{
        backgroundColor: bgColor,
        width: size,
        height: size,
        borderRadius: size / 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FontAwesome name={name} size={28} color="white" />
    </View>
  );
};

export default SocialBtn;
