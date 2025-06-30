import BackBtn from "@/components/BackBtn";
import FTextInput from "@/components/FTextInput";
import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/assets/constants/Colors";
import Button from "@/components/Button";

const acessLocation = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: "60%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderColor: "orange",
            borderWidth: 10,
            padding: 20,
            borderRadius: "50%",
            marginTop:100,
            overflow:'hidden'
          }}
        >
          <Image
            style={{ width: 220, height: 220 }}
            source={require("../../assets/images/854878.png")}
          />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
           
            flex: 1,
            width: "100%",
            height: "70%",
            paddingHorizontal: 25,
          }}
        >
          <View>
            <Button label="Access  Location" 
            style={{marginTop:0}}/>
          </View>

          <View className="mt-10">
            <Text className="text-center tracking-wide font-bold text-neutral-400 line-height-10  text-lg">
              DFOOD WILL ACCESS YOUR LOCATION ONLY WHILE USING THE APP
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default acessLocation;
