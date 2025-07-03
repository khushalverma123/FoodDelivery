import { Text, TouchableOpacity, View, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderTop from "@/components/CustomHeaderTop";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { Colors } from "@/assets/constants/Colors";
import FTextInput from "@/components/FTextInput";

const mockProfileFromStore = {
  name: "John Doe",
  email: "john@example.com",
  phone: "9876543210",
  bio: "Loves clean code and chai ☕",
};

const ProfileEdit = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    setName(mockProfileFromStore.name);
    setEmail(mockProfileFromStore.email);
    setMobileNumber(mockProfileFromStore.phone);
    setBio(mockProfileFromStore.bio);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <CustomHeaderTop name="Edit Profile" />

      <ScrollView
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Image */}
        <View className="items-center justify-center mb-4">
          <View className="relative">
            <View className="rounded-full overflow-hidden w-40 h-40">
              <Image
                source={require("../../assets/images/premium_photo.jpeg")}
                className="w-full h-full"
                style={{ resizeMode: "cover" }}
              />
            </View>

            <View className="absolute bottom-2 right-1 bg-white rounded-full p-1 shadow-md">
              <MaterialCommunityIcons
                name="pencil"
                size={24}
                color={Colors.PRIMARY}
              />
            </View>
          </View>
        </View>

        {/* Input Fields */}
        <View className="gap-3">
          <FTextInput
            label="Full Name"
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
            label="Bio"
            type="text"
            value={bio}
            onChangeText={setBio}
            placeholder="Write something about yourself"
          />
        </View>

        {/* Save Changes Button */}
        <TouchableOpacity className="mt-6 mb-2 bg-orange-500 p-5 rounded-xl items-center">
          <Text className="text-white font-semibold text-lg">SAVE</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileEdit;
