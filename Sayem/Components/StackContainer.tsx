import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "../tailwind.config";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ImageBackground } from "expo-image";
import { router } from "expo-router";

interface StackContainerProps {
  children: React.ReactNode;
  title: string;
  desc: string;
}

const StackContainer = (props: StackContainerProps) => {
  return (
    <View style={tw`flex-1 bg-white pt-7 border-white`}>
      <StatusBar style="auto" backgroundColor="white" />
      {/* header  */}
      <View
        style={tw`h-16 w-full bg-white px-4 flex gap-5 flex-row items-center`}
      >
        {/* back button  */}
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        {/* logo  */}
        <View style={tw`flex-1`}>
          {/* <Image
            source={require("../assets/Images/sayem.png")}
            style={tw`w-40 h-8`}
          /> */}
          <Text style={tw`font-SemiBold text-primary text-base`}>
            {props.title}
          </Text>
          <Text style={tw`font-Regular text-xs`}>{props.desc}</Text>
        </View>
      </View>
      <View style={tw`flex-1 bg-white`}>
        <ImageBackground
          source={require("../assets/Images/mobile-pattern.png")}
          style={tw`flex-1 pb-10`}
          contentFit="cover"
        >
          {props.children}
        </ImageBackground>
      </View>
    </View>
  );
};

export default StackContainer;
