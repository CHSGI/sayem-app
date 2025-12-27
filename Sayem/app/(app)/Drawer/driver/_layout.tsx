import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="available-jobs" />
      <Stack.Screen name="active-jobs" />
      <Stack.Screen name="earnings" />
      <Stack.Screen name="my-jobs" />
    </Stack>
  );
};

export default RootLayout;
