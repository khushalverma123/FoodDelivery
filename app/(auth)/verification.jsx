import BackBtn from "@/components/BackBtn";
import FTextInput from "@/components/FTextInput";
import React, { useState, useRef, useEffect } from "react";
import { Text, TouchableOpacity, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { Colors } from "@/assets/constants/Colors";

const verification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (timeLeft === 0) {
      setCanResend(true);
    } else {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const handleChange = (text, index) => {
    console.log("text", text);
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    console.log("index", index);

    if (text && index < otp.length - 1) {
      setCurrentIndex(index + 1);
    }

    if (index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handleResend = () => {
    if (canResend) {
      console.log("Resend OTP functionality triggered");
      setCanResend(false); // Disable resend button again
      setTimeLeft(30); // Reset countdown
    }
  };

  const handleSubmit = () => {
    console.log("otp found", otp);
    if (otp.join("").length === otp.length) {
      Alert.alert("OTP Submitted", `Entered OTP: ${otp.join("")}`);
    } else {
      Alert.alert("Error", "Please enter a valid OTP.");
    }
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
          paddingTop: 95,
          position: "relative",
        }}
      >
        <BackBtn />
        <Text className="text-white text-center font-bold tracking-widest text-4xl">
          Verification
        </Text>
        <Text className="text-white text-center text-sm tracking-wider mt-3">
          We have sent a code to your email
        </Text>
        <Text className="text-white text-center text-lg tracking-wider mt-2 font-bold ">
          example@gmail.com
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
        <View className="flex-row justify-between p-1">
          <Text className="text-sm font-medium" style={{ color: "grey" }}>
            CODE
          </Text>
          <Text className="text-sm font-bold">
            {timeLeft > 0 ? (
              <>
                <Text className="">
                  <Text className="font-bold underline tracking-wide ml-10">
                    Resend
                  </Text>{" "}
                  <Text style={{ color: "grey" }}>{`in ${timeLeft} sec`}</Text>
                </Text>
              </>
            ) : (
              <TouchableOpacity onPress={handleResend}>
                <Text className="font-bold underline">Resend</Text>
              </TouchableOpacity>
            )}
          </Text>
        </View>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              style={[
                styles.otpInput,
                {
                  backgroundColor: Colors.field.input,
                  paddingVertical: 12, // reasonable padding
                  paddingHorizontal: 0,
                  color: "#000", // ensures text is visible
                },
              ]}
              maxLength={1}
              keyboardType="number-pad"
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              onFocus={() => setCurrentIndex(index)}
            />
          ))}
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 20,
            borderRadius: 10,
            marginVertical: 20,
          }}
          onPress={handleSubmit}
        >
          <Text className="text-[#fff] text-center font-bold tracking-wider text-lg uppercase ">
            {canResend ? "Resend Code" : "verify Code"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.TERTIARY, // Adjust as per your theme
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 10,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderColor: "#ccc",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 20,
    marginHorizontal: 5,
    backgroundColor: "#fff",
    backgroundColor: "red",
  },
  submitButton: {
    backgroundColor: Colors.PRIMARY, // Adjust as per your theme
    padding: 15,
    borderRadius: 10,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default verification;
