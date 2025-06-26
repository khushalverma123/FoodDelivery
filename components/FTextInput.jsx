import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import { Colors } from "@/assets/constants/Colors";
import { Feather } from "@expo/vector-icons";


const FTextInput = ({
  label,
  type,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  style,
  inputStyle,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPassword = type === "password";

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.inputWrapper}>
        <TextInput
          style={[styles.input, inputStyle]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={Colors.SECONDARY}
          secureTextEntry={isPassword && !isPasswordVisible}
          {...rest}
        />

        {isPassword && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible((prev) => !prev)}
            style={styles.icon}
          >
            <Feather
              name={isPasswordVisible ? "eye" : "eye-off"}
              size={20}
              color={Colors.SECONDARY}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    color: "black",
    textTransform: "uppercase",
    fontSize: 14,
    letterSpacing: 2,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#f0f5fa",
    padding: 10,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: "#000",
  },
  icon: {
    marginLeft: 8,
  },
});

export default FTextInput;
