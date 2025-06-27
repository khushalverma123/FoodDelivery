import { Colors } from "@/assets/constants/Colors";
import BackBtn from "@/components/BackBtn";
import FTextInput from "@/components/FTextInput";
import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { signUpUser } from "@/redux/slices/signUpSlice";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [name, setName] = useState();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.signup);

  const handleSignUp = () => {
    const FormData = {
      email: email,
      password: password,
      mobile: mobileNumber,
      name: name,
    };
    dispatch(signUpUser(FormData))
      .unwrap()
      .then((data) => {
        navigation.goBack();
        console.log("SignUp successful", data);
      })
      .catch((err) => {
        console.log("SignUp failed", err);
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
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 50,
          position: "relative",
        }}
      >
        <BackBtn />
        <Text className="text-white text-center font-bold tracking-wider text-3xl">
          Sign Up
        </Text>
        <Text className="text-white text-center text-xl tracking-wider">
          Please sign up to get started
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            backgroundColor: "#fff",
            flex: 1,
            width: "100%",
            height: "70%",
            padding: 25,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <View>
            <FTextInput
              label="Name"
              type="name"
              value={name}
              onChangeText={setName}
              placeholder="Enter your Name"
            />
            <FTextInput
              label="Email"
              type="email"
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your Email"
            />
            <FTextInput
              label="Phone Number"
              type="phone"
              value={mobileNumber}
              onChangeText={setMobileNumber}
              placeholder="Enter your Phone"
            />
            <FTextInput
              label="Password"
              type="password"
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
            />
            <FTextInput
              label="Re-Type Password"
              type="password"
              value={confirmPass}
              onChangeText={setConfirmPass}
              placeholder="Enter your password"
            />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: Colors.PRIMARY,
              padding: 20,
              borderRadius: 10,
              marginVertical: 40,
            }}
            onPress={handleSignUp}
            disabled={loading}
          >
            {loading ? (
              <View className="flex-row justify-center gap-5">
                <ActivityIndicator size={"small"} color={Colors.SECONDARY} />
                <Text className="text-[#fff] text-center font-bold tracking-wider text-lg uppercase ">
                  Sign up
                </Text>
              </View>
            ) : (
              <Text className="text-[#fff] text-center font-bold tracking-wider text-lg uppercase ">
                Sign up
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
