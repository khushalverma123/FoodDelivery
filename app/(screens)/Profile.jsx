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
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "@/assets/constants/Colors";
import MenuItem from "@/components/MenuItem";
import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import ProfileItem from "@/components/ProfileItem";
import { useRouter } from "expo-router";

const router = useRouter();
const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, padding: 15 }}>
      <View className="flex-row gap-10">
        <View
          style={{
            width: "30%",
            borderRadius: 100,
            backgroundColor: "red",
            overflow: "hidden",
          }}
        >
          <Image
            source={require("../../assets/images/premium_photo.jpeg")}
            style={{ width: "100%", height: 100, resizeMode: "cover" }}
          />
        </View>
        <View className="justify-center">
          <View className="flex-column gap-2">
            <Text className="items-center font-bold text-2xl">
              Vishal Khadok
            </Text>
            <Text className="text-sm text-gray-500">I love fast food</Text>
          </View>
        </View>
      </View>
      <ScrollView
       showsVerticalScrollIndicator={false}
      >
      <View>
        <View
          className="bg-gray-200 mt-10 rounded-2xl py-4"
          style={{ overflow: "hidden" }}
        >
          <ProfileItem
            iconName="user"
            name="Personal Info"
            iconColor="orange"
            onPress={() => router.push("/profile")}
          />
          <ProfileItem
            iconLib="FontAwesome5"
            iconName="address-book"
            name=" Address"
            iconColor="indigo"
          />
        </View>
      </View>

      <View>
        <View
          className="bg-gray-200 mt-10 rounded-2xl py-4"
          style={{ overflow: "hidden" }}
        >
          <ProfileItem
            iconLib="Feather"
            iconName="shopping-bag"
            iconColor="blue"
            name="Cart"
          />
          <ProfileItem
            iconLib="MaterialIcons"
            iconName="favorite-border"
            name=" Address"
            iconColor="purple"
          />
          <ProfileItem
            iconLib="Ionicons"
            iconName="notifications-outline"
            name=" Notification"
            iconColor="gold"
          />
          <ProfileItem
            iconLib="MaterialIcons"
            iconName="payment"
            name="Payment Method"
            iconColor="blue"
          />
        </View>
      </View>

      <View>
        <View
          className="bg-gray-200 mt-10 rounded-2xl py-4"
          style={{ overflow: "hidden" }}
        >
          <ProfileItem
            iconName="question"
            iconColor="orange"
            name="FAQs"
          />
          <ProfileItem
            iconLib="MaterialIcons"
            iconName="reviews"
            name=" Address"
            iconColor="blue"
          />
          <ProfileItem
            iconLib="Feather"
            iconName="settings"
            name=" setting"
            iconColor="purple"
          />
        </View>
      </View>

      <View>
        <View
          className="bg-gray-200 mt-10 rounded-2xl py-4"
          style={{ overflow: "hidden" }}
        >
          <ProfileItem
            iconLib="MaterialIcons"
            iconName="logout"
            iconColor="red"
            name="Log Out"
          />
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
