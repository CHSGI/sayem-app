import React from "react";
import { Drawer } from "expo-router/drawer";
import DrawerContent from "../../../Components/DrawerContent";

const RootLayout = () => {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerHideStatusBarOnOpen: true,
        swipeEnabled: false,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    />
  );
};

export default RootLayout;
