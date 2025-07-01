import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { CategoryData } from "../app/utils/CategoryData";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "@/assets/constants/Colors";

const PopularProduct = () => {
  const [cartItems, setCartItems] = useState({});

  const handleAddCart = (itemId) => {
    setCartItems((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId], 
    }));
  };

  const renderItem = ({ item }) => {
    const isAdded = cartItems[item.id];

    return (
      <View
        style={{
          flex: 1,
          margin: 8,
          padding: 8,
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: { width: 5, height: 5 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          position: "relative",
        }}
      >
        <Image
          source={item.image}
          style={{ width: "100%", height: 100, borderRadius: 10 }}
          resizeMode="cover"
        />
        <View className="flex flex-col gap-1">
          <Text className="text-lg font-bold leading-none">{item.title}</Text>
          <Text className="text-[13px] text-[grey]">Rose Garden</Text>
          <Text className="text-[18px] font-bold">$40</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleAddCart(item.id)}
          className="absolute bottom-0 right-0 m-2"
        >
          <AntDesign
            name={isAdded ? "minuscircle" : "pluscircle"}
            size={27}
            color={Colors.PRIMARY}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ marginTop: 16, marginBottom: 16 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Popular Burgers
        </Text>
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
