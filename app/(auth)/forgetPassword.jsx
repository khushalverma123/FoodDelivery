import { Colors } from "@/assets/constants/Colors";
import BackBtn from "@/components/BackBtn";
import FTextInput from "@/components/FTextInput";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { forgetPassword } from "@/redux/slices/forgetPasswordSlice";
import { useDispatch } from "react-redux";
import { useRouter, useNavigation } from "expo-router";
import { ActivityIndicator } from "react-native";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading , setLoading] = useState(false)
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const router = useRouter();

  const handleForget = () => {
    if (!email) {
      Alert.alert("Error", "Please enter your email address.");
      return;
    }

    setLoading(true); 

    const FormData = {
      email: email,
    };

    dispatch(forgetPassword(FormData))
      .unwrap()
      .then((data) => {
        setLoading(false); // Set loading state to false on success
        router.push("./verification");
        console.log("Navigated to the verification", data);
      })
      .catch((err) => {
        setLoading(false); // Set loading state to false on error
        console.log("Unable to send the OTP");
        // Alert.alert("Error", err?.message || "Something went wrong!");
      });
  };


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
          onPress={handleForget}
        >
          <Text
            className="text-[#fff] text-center font-bold tracking-wider text-lg uppercase "
       
          >
            {loading ? <ActivityIndicator color="#fff" /> : "Send Code"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;
