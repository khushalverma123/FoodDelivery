import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileIntro from "@/components/ProfileIntro";
import CustomHeaderTop from "@/components/CustomHeaderTop";
import {
  AntDesign,
  FontAwesome,
  MaterialIcons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";
import InfoRow from "@/components/InfoItem";
import { useRouter } from "expo-router";
const router = useRouter();

const personalInfo = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 15 }}>
      <CustomHeaderTop 
      name="Personal Info"
      editOption="Edit"
      />
      <View className="mt-5">
        <ProfileIntro />
      </View>

      <View>
        <View className="bg-gray-200 py-5 mt-10 rounded-2xl overflow-hidden">
          <InfoRow
            iconLib="AntDesign"
            iconName="user"
            label="FULL NAME"
            value="Vishal Khadok"
            iconColor = "orange"
          />

          <InfoRow
            iconLib="MaterialCommunityIcons"
            iconName="email-outline"
            label="EMAIL"
            value="vishal@example.com"
            iconColor = "purple"

          />

          <InfoRow
            iconLib="Feather"
            iconName="phone"
            label="PHONE"
            value="+91 9876543210"
            iconColor = "mediumturquoise"

          />
        </View>
      </View>
      {/* <View className="flex-row px-6 py-2 items-center justify-between">
        <View className="flex-row items-center gap-5">
          <View className="bg-white rounded-full p-3">
            <AntDesign name="user" size={24} color="orange" />
          </View>
          <View className="flex-col">
            <Text className="text-lg font-normal text-gray tracking-wider">
              FULL NAME
            </Text>
            <Text className="text-sm font-normal text-gray-500 tracking-wider">
              Vishal Khadok
            </Text>
          </View>
        </View>
      </View> */}
    </SafeAreaView>
  );
};

export default personalInfo;
