import BackBtn from "@/components/BackBtn";
import FTextInput from "@/components/FTextInput";
import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Image } from "react-native";
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
          paddingTop: 50,
          position: "relative",
        }}
      >
        <View>
          <Image
            style={{ width: "100%" }}
            source={require("../../assets/images/")}
          />
        </View>
        <Text>Hello</Text>
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
          }}
        >
          <Button label="Access  Location" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default acessLocation;
