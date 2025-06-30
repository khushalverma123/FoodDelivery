import { View, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "expo-router";
const BackBtn = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className=" bg-[#ecf0f4] rounded-full"
      onPress={() => navigation.goBack()}
    >
      <Entypo name="chevron-with-circle-left" size={35} color="black" />
    </TouchableOpacity>
  );
};

export default BackBtn;
