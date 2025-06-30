import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "@/assets/constants/Colors";

const RestaurantItem = ({ item }) => {
  const tags = [
    {
      id: 1,
      name: "burger",
    },
    {
      id: 2,
      name: "chicken",
    },
    {
      id: 3,
      name: "riche",
    },
    {
      id: 4,
      name: "wings",
    },
  ];
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View className="gap-2 m-2">
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.tags}>
          {tags.map((tag) => tag.name).join(" - ")}
        </Text>
        <View className="flex-row gap-10 items-center ">
          <View className="flex-row gap-2 items-center">
            <FontAwesome6 name="star" size={24} color={Colors.PRIMARY} />
            <Text className="text-md font-bold">4.7</Text>
          </View>
          <View className="flex-row gap-2 items-center">
            <MaterialCommunityIcons
              name="truck-delivery-outline"
              size={28}
              color={Colors.PRIMARY}
            />
            <Text className="text-md font-bold">Free</Text>
          </View>

          <View className="flex-row gap-2 items-center">
            <FontAwesome6 name="clock" size={24} color={Colors.PRIMARY} />
            <Text className="text-md font-bold">20 min</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RestaurantItem;
const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    backgroundColor: "red",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    textTransform: "capitalize",
  },
  tags: {
    textTransform: "capitalize",
    color: "grey",
  },
});
