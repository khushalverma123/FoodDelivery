import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import { logout } from "@/redux/slices/loginSlice";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import CustomHeader from "@/components/CustomHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/assets/constants/Colors";
import { ScrollView } from "react-native-gesture-handler";
import { Searchbar } from "react-native-paper";
import Entypo from "@expo/vector-icons/Entypo";
import CategoryItem from "@/components/CategoryItem";
import RestaurantItem from "@/components/RestaurantItem";
import { CategoryData } from "../utils/CategoryData";
import OpenRestaurants from "@/components/OpenRestaurants";

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      dispatch(logout());
      router.replace("/(auth)/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  //   {
  //     id: 1,
  //     title: "all",
  //     image: itemImg1,
  //   },
  //   {
  //     id: 2,
  //     title: "asdasd",
  //     image: itemImg2,
  //   },
  //   {
  //     id: 3,
  //     title: "alasdasdl",
  //     image: itemImg3,
  //   },
  //   {
  //     id: 4,
  //     title: "alasdsdl",
  //     image: itemImg4,
  //   },
  //   {
  //     id: 5,
  //     title: "alasdsdl",
  //     image: itemImg4,
  //   },
  // ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.BGCOLOR,
        padding: 10,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomHeader />
        <View>
          <TouchableOpacity onPress={() => router.push("./screens/Profile")}>
            <Text style={{ color: Colors.PRIMARY }}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row gap-2 mb-3">
          <Text className="text-lg">Hey Halal,</Text>
          <Text className="text-lg font-bold">Good Afternoon!</Text>
        </View>
        <Searchbar
          placeholder="Search dishes, restaurants"
          style={styles.searchBar}
          inputStyle={{
            borderBottomWidth: 0,
          }}
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <View className="mt-4">
          <View className="flex-row justify-between items-center mt-3">
            <Text className="text-xl">All Categories</Text>
            <TouchableOpacity
              className="flex-row"
              onPress={() => router.push("./(screens)/AllCategory")}
            >
              <Text className="text-lg">See All</Text>
              <Entypo name="chevron-small-right" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={CategoryData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CategoryItem title={item.title} image={item.image} />
            )}
          />
        </View>
        <OpenRestaurants />
        <TouchableOpacity onPress={handleLogout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  searchBar: {
    borderRadius: 10,
    backgroundColor: "#ecf0f4",
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
});
