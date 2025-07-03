import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "@/assets/constants/Colors";
import MenuItem from "@/components/MenuItem";
import { useState } from "react";
import { MenueData } from "../utils/MenueData";
import PopularProduct from "@/components/PopularProduct";

const RestaurantDetail = () => {
  const [activeTab, setActiveTab] = useState(
    MenueData && MenueData.length > 0 ? MenueData[0].id : null
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.BGCOLOR , padding:10}}>
      <ScrollView>

      <View>
        <Image
          source={require("../../assets/images/restaurantView.jpg")}
          style={{ width: "100%", height: 250, borderRadius: 20 }}
        />
      </View>

      <View className="p-5">
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

        <View className="mt-5">
          <Text className="font-semibold text-2xl">Spicy Restaurant</Text>
        </View>

        <View className="mt-3">
          <Text className="tracking-wider leading-7 text-gray-400 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quo
            harum quod dolore tempore molestiae nostrum veniam iure ratione
            porro.
          </Text>
        </View>

        <View className="mt-8">
          <FlatList
            data={MenueData}
            renderItem={({ item }) => (
              <MenuItem
                item={item}
                isActive={item.id === activeTab}
                onPress={() => setActiveTab(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
          />
        </View>
      </View>
      <PopularProduct />

      </ScrollView>
    </SafeAreaView>
  );
};

export default RestaurantDetail;
