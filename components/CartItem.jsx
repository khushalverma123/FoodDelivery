import React, { useState } from "react";

import AntDesign from "@expo/vector-icons/AntDesign";
import { View, Text, TouchableOpacity, Image } from "react-native";
const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

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
        flexDirection: "row",
        gap: 20,
        backgroundColor: "#1e1e1e",
      }}
    >
      <View
        style={{
          width: 150,
          height: 120,
          backgroundColor: "gray",
          padding: 2,
          borderRadius: 18,
        }}
      >
        <Image
          source={item.image}
          style={{ width: "100%", height: "100%", borderRadius: 15 }}
          resizeMode="cover"
        />
      </View>

      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "lighter",
            color: "#fff",
            flexWrap: "wrap",
            letterSpacing: 1.5,
          }}
          numberOfLines={2}
        >
          {item.title}
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
          $40
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginTop: 8,
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity onPress={decreaseQty}>
            <AntDesign
              name="minus"
              size={19}
              className="bg-[grey] rounded-full p-1"
              color="#fff"
            />
          </TouchableOpacity>
          <Text style={{ color: "#fff", fontSize: 16 }}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQty}>
            <AntDesign
              name="plus"
              size={19}
              className="bg-[grey] rounded-full p-1"
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
