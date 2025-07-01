import DropDownPicker from "react-native-dropdown-picker";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackBtn from "@/components/BackBtn";
import { Colors } from "@/assets/constants/Colors";
import { FontAwesome6, Feather } from "@expo/vector-icons";
import OpenRestaurants from "@/components/OpenRestaurants";
import PopularProduct from "@/components/PopularProduct";

const AllCategory = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
  ]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.BGCOLOR,
        padding: 10,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row items-center justify-between">
          <BackBtn />
          <View style={{ width: 150, zIndex: 1000, elevation: 10 }}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Select item"
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              animationType="slideIn"
              animationDuration={300}
            />
          </View>

          <TouchableOpacity className="bg-[#ecf0f4] p-3 rounded-full">
            <Feather name="search" size={21} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#ecf0f4] p-3 rounded-full">
            <Feather name="filter" size={21} color="#000" />
          </TouchableOpacity>
        </View>
        <PopularProduct />
        <OpenRestaurants />
      </ScrollView>
    </SafeAreaView>
  );
};
export default AllCategory;
const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "#fff",
    zIndex: 1000,
  },
  dropDownContainerStyle: {
    borderWidth: 1,
    borderColor: "lightgrey",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    zIndex: 999,
  },
});
