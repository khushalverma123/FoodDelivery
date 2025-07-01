import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/assets/constants/Colors";

const MenuItem = ({ item, isActive, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          borderWidth: 1.9,
          borderRadius: 25,
          paddingVertical: 12,
          paddingHorizontal: 21,
          borderColor: isActive ? Colors.PRIMARY : "gray",
          backgroundColor: isActive ? Colors.PRIMARY : "transparent",
        }}
      >
        <Text style={{ color: isActive ? "#fff" : "#000", fontWeight: "600" }}>
          {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "center",
  },
});
