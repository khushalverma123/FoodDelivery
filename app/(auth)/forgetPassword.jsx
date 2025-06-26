import { Colors } from "@/assets/constants/Colors";
import BackBtn from "@/components/BackBtn";
import FTextInput from "@/components/FTextInput";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const ForgetPassword = () => {
  const [email, setEmail] = useState();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.TERTIARY,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: "30%",
          paddingTop: 50,
          position: "relative",
        }}
      >
        <BackBtn />
        <Text className="text-white text-center font-bold tracking-wider text-3xl">
          Forgot Password
        </Text>
        <Text className="text-white text-center text-xl tracking-wider">
          Please enter your email
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          width: "100%",
          height: "70%",
          padding: 25,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <View>
          <FTextInput
            label="Email"
            type="email"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your Email"
          />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 20,
            borderRadius: 10,
            marginVertical: 20,
          }}
        >
          <Text className="text-[#fff] text-center font-bold tracking-wider text-lg uppercase ">
            Send Code
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;
