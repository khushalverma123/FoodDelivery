import { View, Text, Image } from "react-native";
import React from "react";

const ProfileIntro = () => {
  return (
    <View className="flex-row gap-10">
      <View
        style={{
          width: "30%",
          borderRadius: 100,
          backgroundColor: "red",
          overflow: "hidden",
        }}
      >
        <Image
          source={require("../assets/images/premium_photo.jpeg")}
          style={{ width: "100%", height: 100, resizeMode: "cover" }}
        />
      </View>
      <View className="justify-center">
        <View className="flex-column gap-2">
          <Text className="items-center font-bold text-2xl">Vishal Khadok</Text>
          <Text className="text-lg text-gray-500">I love fast food</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileIntro;
