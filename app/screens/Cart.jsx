import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/assets/constants/Colors";
import BackBtn from "@/components/BackBtn";
import { CategoryData } from "../utils/CategoryData";
import CartItem from "@/components/CartItem";
const Cart = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.TERTIARY,
      }}
    >
      <View className="px-3 my-3 flex-row items-center justify-between">
        <View className="flex-row items-center gap-4">
          <BackBtn />
          <Text className="text-lg capitalize tracking-wider text-white">
            Cart
          </Text>
        </View>
        <TouchableOpacity>
          <Text className="font-md text-[#FF7622] uppercase font-ligher underline tracking-wider">
            Edit Items
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 10 }}>
        <View>
          <FlatList
            data={CategoryData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CartItem item={item} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
      <View className="bg-white rounded-[15] p-5">
        <View className="flex-row items-center gap-5 my-5">
          <Text className="text-xl text-[grey] font-bold">Total:</Text><Text className="text-4xl font-light  tracking-wider font-bold">$95</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 20,
            borderRadius: 10,
          }}
        >
          <Text className="text-[#fff] text-center font-bold tracking-wider text-lg uppercase ">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
