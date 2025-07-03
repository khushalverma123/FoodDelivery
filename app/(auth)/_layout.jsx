import { Stack } from "expo-router";
import React from "react";

const AuthLayout = () => {
  return (
    <Stack initialRouteName="login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="forgetPassword" />
      <Stack.Screen name="verification" />
      <Stack.Screen name="acessLocation" />
    </Stack>
  );
};

export default AuthLayout;
