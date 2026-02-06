import React from "react";
import { Slot } from "expo-router";
import Toastable from "react-native-toastable";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const RootLayout = () => {
  const { top } = useSafeAreaInsets();
  return (
    <>
      <Slot />
      <Toastable
        statusMap={{
          success: "green",
          danger: "red",
          warning: "yellow",
          info: "blue",
        }}
        offset={top}
      />
    </>
  );
};

export default RootLayout;
