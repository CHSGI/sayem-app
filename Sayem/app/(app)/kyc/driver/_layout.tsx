import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="pi" />
      <Stack.Screen name="idv" />
      <Stack.Screen name="vv" />
      <Stack.Screen name="fv" />
      {/* bc  */}
      <Stack.Screen name="sv" />
    </Stack>
  );
};

export default RootLayout;
