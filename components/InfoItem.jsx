import { View, Text } from "react-native";
import React from "react";

// Import supported icon libraries
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

// Icon library mapping
const iconLibraries = {
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  FontAwesome6,
};

const InfoRow = ({
  iconLib = "AntDesign",
  iconName,
  label,
  value,
  iconColor ,
  bgColor = "white",
}) => {
  const IconComponent = iconLibraries[iconLib];

  return (
    <View className="flex-row px-6 py-2 items-center justify-between">
      <View className="flex-row items-center gap-5">
        <View className="rounded-full p-3" style={{ backgroundColor: bgColor }}>
          {IconComponent && (
            <IconComponent name={iconName} size={24} color={iconColor} />
          )}
        </View>
        <View className="flex-col">
          <Text className="text-lg font-normal text-gray-600 tracking-wider">
            {label}
          </Text>
          <Text className="text-sm font-normal text-gray-500 tracking-wider">
            {value}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InfoRow;
