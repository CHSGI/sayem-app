import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import tw from "../tailwind.config";
import { Image } from "expo-image";
import {
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  Foundation,
} from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { accountState } from "../store/stateStore";

const DrawerContent = (props: DrawerContentComponentProps) => {
  const DrivevrNav = [
    {
      name: "Dashboard",
      href: "/",
      icon: <Feather name="home" size={24} color={tw.color("gray-600")} />,
    },
    {
      name: "Available Jobs",
      href: "/driver/available-jobs",
      icon: <Feather name="box" size={24} color={tw.color("gray-600")} />,
    },
    {
      name: "Active Jobs",
      href: "/driver/active-jobs",
      icon: <Feather name="box" size={24} color={tw.color("gray-600")} />,
    },
    {
      name: "Earnings",
      href: "/driver/earnings",
      icon: <FontAwesome name="money" size={24} color={tw.color("gray-600")} />,
    },
    {
      name: "My Jobs",
      href: "/driver/my-jobs",
      icon: <FontAwesome name="tasks" size={24} color={tw.color("gray-600")} />,
    },
  ];
  const UserNav = [
    {
      name: "Dashboard",
      href: "/",
      icon: <Feather name="home" size={24} color={tw.color("gray-600")} />,
    },
    {
      name: "Book Shipment",
      href: "/user/book-shipment",
      icon: <Foundation name="book" size={24} color={tw.color("gray-600")} />,
    },
    {
      name: "Active Shipment",
      href: "/user/active-shipment",
      icon: (
        <FontAwesome5
          name="shipping-fast"
          size={24}
          color={tw.color("gray-600")}
        />
      ),
    },
    {
      name: "Book Ride",
      href: "/user/book-ride",
      icon: (
        <FontAwesome6 name="car-side" size={24} color={tw.color("gray-600")} />
      ),
    },
    {
      name: "Freight Quote",
      href: "/user/freight-quote",
      icon: <FontAwesome name="plane" size={24} color={tw.color("gray-600")} />,
    },
    {
      name: "Booking History",
      href: "/user/booking-history",
      icon: (
        <FontAwesome5 name="history" size={24} color={tw.color("gray-600")} />
      ),
    },
  ];
  const { role } = accountState();
  const NavView = role === "individual/business" ? UserNav : DrivevrNav;
  // const navigation = useNavigation();
  return (
    <View style={tw`flex-1`}>
      <View style={tw`h-32 bg-blue-200 p-3 flex justify-center pt-8`}>
        <Image
          source={require("../assets/Images/sayem.png")}
          contentFit="contain"
          style={tw`w-40 h-10`}
        />
        <Text style={tw`text-xs font-Regular`}>
          Transport & Logistics Services Limited
        </Text>
      </View>
      {/*
      |
      |
       body  
       |
       |
       */}
      <View style={tw`py-2`}>
        {NavView.map((item, index) => (
          <Link href={"/Drawer" + item.href} key={index}>
            <View style={tw`flex flex-row items-center p-4 pl-5`}>
              <View style={tw`w-10`}>{item.icon}</View>
              <Text style={tw`font-Regular text-sm text-gray-600 my-auto`}>
                {item.name}
              </Text>
            </View>
          </Link>
        ))}
        {/* notification  */}
        <TouchableOpacity
          onPress={() => {
            router.push("/Drawer/notification");
          }}
          style={tw`flex flex-row items-center gap-2 p-4 pl-5`}
        >
          <View style={tw`w-10`}>
            <Fontisto name="bell" size={24} color={tw.color("gray-600")} />
          </View>
          <Text style={tw`font-Regular text-sm text-gray-600`}>
            Notifications
          </Text>
        </TouchableOpacity>
        {/* settings  */}
        <TouchableOpacity
          style={tw`flex flex-row items-center gap-2 p-4 pl-5`}
          onPress={() => {
            router.push("/Drawer/settings");
          }}
        >
          <View style={tw`w-10`}>
            <FontAwesome6 name="gear" size={24} color={tw.color("gray-600")} />
          </View>
          <Text style={tw`font-Regular text-sm text-gray-600`}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DrawerContent;
