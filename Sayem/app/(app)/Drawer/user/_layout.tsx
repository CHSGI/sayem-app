import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="book-shipment" />
      <Stack.Screen name="active-shipment" />
      <Stack.Screen name="book-ride" />
      <Stack.Screen name="freight-quote" />
      <Stack.Screen name="track-shipment" />
      <Stack.Screen name="booking-history" />
    </Stack>
  );
};

export default RootLayout;
