import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import BackBtn from "@/components/BackBtn";
import { useRouter } from "expo-router";
const router = useRouter();

const customHeaderTop = ({ name, editOption }) => {
  return (
    <View className="px-3 my-3 flex-row items-center justify-between">
      <View className="flex-row items-center gap-4">
        <BackBtn />
        <Text className="text-xl capitalize tracking-wider text-black">
          {name}
        </Text>
      </View>
      {editOption && (
        <TouchableOpacity onPress={() => router.push("/profileEdit")}>
          <Text className="font-md text-[#FF7622] uppercase font-ligher underline tracking-wider">
            {editOption}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default customHeaderTop;
