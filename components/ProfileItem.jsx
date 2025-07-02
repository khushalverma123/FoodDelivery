import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  AntDesign,
  FontAwesome,
  MaterialIcons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useRouter } from "expo-router";

const router = useRouter();
const ProfileItem = ({
  iconLib = "AntDesign",
  iconName,
  iconColor,
  name,
  path = "/",
}) => {
  const router = useRouter();

  const IconComponent =
    iconLib === "FontAwesome"
      ? FontAwesome
      : iconLib === "MaterialIcons"
        ? MaterialIcons
        : iconLib === "FontAwesome5"
          ? FontAwesome5
          : iconLib === "Feather"
            ? Feather
            : iconLib === "Ionicons"
              ? Ionicons
              : iconLib === "EvilIcons"
                ? EvilIcons
                : AntDesign;

  return (
    <TouchableOpacity
      className="flex-row px-6 py-2 items-center justify-between"
      onPress={() => router.push(path)}
    >
      <View className="flex-row items-center gap-5">
        <View className="bg-white rounded-full p-3">
          <IconComponent name={iconName} size={20} color={iconColor} />
        </View>
        <Text className="text-lg font-normal text-gray tracking-wider">
          {name}
        </Text>
      </View>

      <View>
        <AntDesign name="right" size={15} color="gray" />
      </View>
    </TouchableOpacity>
  );
};
export default ProfileItem;
