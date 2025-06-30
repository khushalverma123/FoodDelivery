import { Colors } from "@/assets/constants/Colors";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

// Destructure label prop
const Button = ({ label }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.PRIMARY,
        padding: 20,
        borderRadius: 10,
        marginVertical: 0,
      }}
    >
      <Text className="text-[#fff] text-center font-bold tracking-wider text-lg uppercase">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
