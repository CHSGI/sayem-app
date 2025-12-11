import { View, Text } from "react-native";
import React from "react";
import { router } from "expo-router";
import tw from "../../tailwind.config";
import { ImageBackground, Image } from "expo-image";
import AppIntroSlider from "react-native-app-intro-slider";
import { HEIGHT } from "../../lib/Dimension";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../../Components/CustomButton";

const RenderItem = (props: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <View style={tw`flex-1 relative overflow-hidden rounded-3xl`}>
      <Image
        source={props.image}
        contentFit="cover"
        style={tw`w-full h-full pb-2`}
      />
      <View style={tw`w-full h-auto min-h-20`}></View>
      <View style={tw`w-full p-5 bg-black/40 absolute bottom-0 rounded-2xl`}>
        <View style={tw` h-auto max-w-64 min-h-20 left-0 pb-9`}>
          <Text style={tw`text-2xl font-SemiBold text-white mb-2`}>
            {props.title}
          </Text>
          <Text style={tw`text-sm leading-5 font-Regular text-white`}>
            {props.description}
          </Text>
        </View>
      </View>
    </View>
  );
};

const Index = () => {
  const renderView = [
    {
      key: 1,
      image: require("../../assets/Images/slider-1.png"),
      title: "Your Smart Way \nto Move Goods, Fast.",
      description:
        "Experience reliable transport and logistics at your fingertips. Sayem connects you with trusted drivers for deliveries—anytime, anywhere.",
    },
    {
      key: 2,
      image: require("../../assets/Images/slider-2.png"),
      title: "Book, Track & \nDeliver in Minutes.",
      description:
        "No more calls or waiting! Book a ride for your goods in seconds, and track every movement live—from pickup to doorstep.",
    },
    {
      key: 3,
      image: require("../../assets/Images/slider-3.png"),
      title: "Your Cargo, \nAlways Safe.",
      description:
        "Sayem partners only with verified drivers and transporters. Real-time updates and insurance options keep your deliveries secure and stress-free.",
    },
    {
      key: 4,
      image: require("../../assets/Images/slider-4.png"),
      title: "No Hidden \nCharges, Ever.",
      description:
        "Know your delivery cost upfront. Enjoy competitive rates and flexible payment options that suit your business or personal needs.",
    },
  ];

  return (
    <View style={tw`flex-1 relative`}>
      <StatusBar style="light" />
      <View style={tw`absolute top-0 left-0 w-full h-[${HEIGHT * 0.85}px]`}>
        <AppIntroSlider
          data={renderView}
          dotStyle={tw`bg-white`}
          activeDotStyle={tw`bg-primary w-8`}
          showDoneButton={false}
          showNextButton={false}
          showPrevButton={false}
          showSkipButton={false}
          renderItem={({
            item,
          }: {
            item: { image: any; title: string; description: string };
          }) => (
            <RenderItem
              title={item.title}
              description={item.description}
              image={item.image}
            />
          )}
        />
      </View>
      <View style={tw`flex-1 -z-10`}>
        <View style={tw` flex-1 `}></View>
        <ImageBackground
          style={tw`flex-1 justify-end p-5 pb-8 bg-white`}
          source={require("../../assets/Images/pattern.png")}
          contentFit="cover"
        >
          <CustomButton
            title="Get Started"
            onPress={() => router.push("/auth/register")}
          />
        </ImageBackground>
      </View>
    </View>
  );
};

export default Index;
