import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="confirm-booking" />
      <Stack.Screen name="booking-receipt" />
    </Stack>
  );
};

export default RootLayout;
