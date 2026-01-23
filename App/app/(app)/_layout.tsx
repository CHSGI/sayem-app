import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Drawer" />
      <Stack.Screen name="kyc" />
    </Stack>
  );
};

export default RootLayout;
