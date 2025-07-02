import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome6, Feather } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";

const CustomHeader = () => {
  const router = useRouter();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View className="flex-row gap-10">
        <TouchableOpacity
          className="bg-[#ecf0f4] p-4 rounded-full"
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <FontAwesome6 name="bars-staggered" size={21} color="#000" />
        </TouchableOpacity>
        <View className=" justify-center ">
          <Text className="text-[#FF7622] font-bold uppercase text-left tracking-wider">
            Deliver To
          </Text>
          <Text className="text-[#989b9e] text-lg text-left">Indore</Text>
        </View>
      </View>
      <View className="relative">
        <TouchableOpacity
          className="bg-[#ecf0f4] p-4 rounded-full"
          onPress={() => router.push("./(screens)/Cart")}
        >
          <Feather name="shopping-bag" size={25} color="#000" />
        </TouchableOpacity>
        <Text style={styles.badge}>5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  badge: {
    position: "absolute",
    right: 0,
    backgroundColor: "#FF7622",
    width: 22,
    height: 22,
    borderRadius: 11,
    textAlign: "center",
    textAlignVertical: "center",
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default CustomHeader;
