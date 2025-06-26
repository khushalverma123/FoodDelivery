import { Colors } from "@/assets/constants/Colors";
import FTextInput from "@/components/FTextInput";
import SocialBtn from "@/components/SocialBtn";
import { loginUser } from "@/redux/slices/loginSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isChecked, setChecked] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        console.log("Stored token:", token);
      }
    } catch (e) {
      console.error("Error reading token", e);
    }
  };
  const handleLogin = () => {
    const FormData = {
      email: email,
      password: password,
    };
    dispatch(loginUser(FormData))
      .unwrap()
      .then((data) => {
        router.replace("/(drawer)");
        console.log("Login successful", data);
      })
      .catch((err) => {
        console.log("Login failed", err);
      });
  };
  useEffect(() => {
    getToken();
  });
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
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 50,
        }}
      >
        <Text className="text-white text-center font-bold tracking-wider text-3xl">
          Log In
        </Text>
        <Text className="text-white text-center text-xl tracking-wider">
          Please sign in to you existing account
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
          <FTextInput
            label="Password"
            type="password"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
          />
        </View>
        <View className="flex-row justify-between mt-3">
          <View className="flex-row gap-2">
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? Colors.PRIMARY : undefined}
            />
            <Text className="text-[#909090]">Remember me</Text>
          </View>
          <TouchableOpacity onPress={() => router.push("./forgetPassword")}>
            <Text style={{ color: Colors.PRIMARY }}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 20,
            borderRadius: 10,
            marginVertical: 40,
          }}
          onPress={handleLogin}
        >
          <Text className="text-[#fff] text-center font-bold tracking-wider text-lg uppercase ">
            Log in
          </Text>
        </TouchableOpacity>
        <View className="flex-row gap-3 justify-center">
          <Text className="text-lg">Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.push("./signup")}>
            <Text className="text-lg uppercase color-[#FF7622] font-bold">
              sign up
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{ marginVertical: 15, textAlign: "center", fontSize: 18 }}>
          Or
        </Text>
        <View className="flex-row justify-evenly">
          <SocialBtn name="facebook" bgColor="#385898" />
          <SocialBtn name="twitter" bgColor="#169ce8" />
          <SocialBtn name="apple" bgColor="#1b1e2e" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
