import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryItem = ({ title, image }) => {
  return (
    <View className="p-2">
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: "row",
    gap: 3,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "lightgrey",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginHorizontal: 20,
    textTransform: "capitalize",
  },
});
