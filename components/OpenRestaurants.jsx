import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import RestaurantItem from './RestaurantItem'
import Entypo from "@expo/vector-icons/Entypo";
import { CategoryData } from "../app/utils/CategoryData";

const OpenRestaurants = () => {
  return (
     <View className="mt-4 mb-4">
          <View className="flex-row justify-between items-center mt-3">
            <Text className="text-xl">Open Restaurants</Text>
            <TouchableOpacity className="flex-row">
              <Text className="text-lg">See All</Text>
              <Entypo name="chevron-small-right" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={CategoryData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <RestaurantItem item={item} />}
          />
        </View>
  )
}

export default OpenRestaurants