import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryItem = ({ title, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal: 6,
    backgroundColor: "#fff",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: "row",
    gap:3
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor:"red",
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
});
