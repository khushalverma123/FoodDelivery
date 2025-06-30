import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { CategoryData } from "../app/utils/CategoryData";

const PopularProduct = () => {
  const renderItem = ({ item }) => (
    <View style={{ flex: 1, margin: 8, alignItems: "center" }}>
      <Image
        source={item.image}
        style={{ width: 100, height: 100, borderRadius: 10 }}
        resizeMode="cover"
      />
      <Text style={{ marginTop: 8 }}>{item.title}</Text>
    </View>
  );

  return (
    <View style={{ marginTop: 16, marginBottom: 16 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Popular Burgers</Text>
      </View>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 10 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        data={CategoryData}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default PopularProduct;
