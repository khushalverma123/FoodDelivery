import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import BackBtn from "@/components/BackBtn";

const customHeaderTop = ({ name }) => {
  return (
    <View className="px-3 my-3 flex-row items-center justify-between">
      <View className="flex-row items-center gap-4">
        <BackBtn />
        <Text className="text-xl capitalize tracking-wider text-black">
          {name}
        </Text>
      </View>
      <TouchableOpacity>
        <Text className="font-md text-[#FF7622] uppercase font-ligher underline tracking-wider">
          EDIT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default customHeaderTop;
