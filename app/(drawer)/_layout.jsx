import { View, Text } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
      }}
      initialRouteName="index"
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
