import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeaderTop from "@/components/CustomHeaderTop";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "@/assets/constants/Colors";
import { useSelector, useDispatch } from "react-redux";
import { deleteAddress } from "@/redux/slices/addressSlice";

const AddressScreen = () => {
  const dispatch = useDispatch();
  const addressList = useSelector((state) => state.address.addressList);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <CustomHeaderTop name="My Address" />

      <View className="flex-1 justify-between">
        <ScrollView
          contentContainerStyle={{ padding: 20 }}
          showsVerticalScrollIndicator={false}
        >
          {addressList.map((item) => (
            <View
              key={item.id}
              className="flex-row gap-3 relative bg-gray-200 p-6 flex-wrap rounded-2xl mb-5"
            >
              {/* Static Icons: Different block for each label */}
              <View className="w-12 h-12 bg-white rounded-full items-center justify-center shadow-sm">
                {item.label === "Home" && (
                  <Feather name="home" size={20} color="mediumturquoise" />
                )}
                {item.label === "Work" && (
                  <MaterialIcons
                    name="work-outline"
                    size={20}
                    color="mediumturquoise"
                  />
                )}
                {item.label !== "Home" && item.label !== "Work" && (
                  <Feather name="map-pin" size={20} color="mediumturquoise" />
                )}
              </View>

              {/* Label and Address */}
              <View className="flex-1 gap-2 pr-1">
                <Text className="font-medium tracking-wider">{item.label}</Text>
                <Text className="text-gray-400 flex-shrink">{item.address}</Text>
              </View>

              {/* Edit/Delete */}
              <View className="absolute right-4 top-4 flex-row gap-3">
                <FontAwesome6 name="edit" size={22} color={Colors.PRIMARY} />
                <TouchableOpacity onPress={() => dispatch(deleteAddress(item.id))}>
                  <AntDesign name="delete" size={22} color={Colors.PRIMARY} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Add New Address Button */}
        <View className="p-4">
          <TouchableOpacity className="bg-orange-500 p-5 mb-3 rounded-xl items-center">
            <Text className="text-white font-semibold text-lg">
              ADD NEW ADDRESS
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddressScreen;
