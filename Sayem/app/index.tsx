import React from "react";
import { useFonts } from "expo-font";
import { Redirect } from "expo-router";
import Splash from "../Components/Splash";

const Index = () => {
  const [loaded, error] = useFonts({
    InterRegular: require("../assets/fonts/InterRegular.ttf"),
    InterMedium: require("../assets/fonts/InterMedium.ttf"),
    InterSemiBold: require("../assets/fonts/InterSemiBold.ttf"),
    InterBold: require("../assets/fonts/InterBold.ttf"),
  });

  if (!loaded || error) {
    return <Splash />;
  }
  // return <Splash />;
  return <Redirect href={"/auth"} />;
};

export default Index;
