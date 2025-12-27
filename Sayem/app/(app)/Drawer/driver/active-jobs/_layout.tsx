import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="navigate" />
      <Stack.Screen name="chat" />
      <Stack.Screen name="delivery" />
    </Stack>
  );
};

export default RootLayout;
