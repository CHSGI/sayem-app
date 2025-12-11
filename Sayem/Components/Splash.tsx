import { View, Text } from "react-native";
import React from "react";
import tw from "../tailwind.config";
import { Image } from "expo-image";

const Splash = () => {
  return (
    <View style={tw`flex-1 items-center justify-center bg-white`}>
      <View>
        <Image
          source={require("../assets/Images/sayem.png")}
          contentFit="cover"
          style={tw`w-60 h-14 mx-auto`}
        />
        <Text style={tw`text-xs font-semibold text-center`}>
          TRANSPORT AND LOGISTICS SERVICES LIMITED.
        </Text>
      </View>
    </View>
  );
};

export default Splash;
