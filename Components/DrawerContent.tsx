import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import tw from "../tailwind.config";
import { Image } from "expo-image";
import {
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  Foundation,
  Ionicons,
} from "@expo/vector-icons";

const DrawerContent = (props: DrawerContentComponentProps) => {
  const DrivevrNav = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <Feather name="home" size={24} color={tw.color("gray-600")} />,
    },
    {
      name: "Available Jobs",
      href: "/available-jobs",
      icon: <Feather name="box" size={24} color={tw.color("gray-600")} />,
    },
    {
      name: "Active Jobs",
      href: "/active-jobs",
      icon: <Feather name="box" size={24} color={tw.color("gray-600")} />,
    },
    {
      name: "Earnings",
      href: "/earnings",
      icon: <FontAwesome name="money" size={24} color={tw.color("gray-600")} />,
    },
    {
      name: "My Jobs",
      href: "/my-jobs",
      icon: <FontAwesome name="tasks" size={24} color={tw.color("gray-600")} />,
    },
  ];
  const UserNav = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <Feather name="home" size={24} color={tw.color("gray-600")} />,
    },
    {
      name: "Book Shipment",
      href: "/book-shipment",
      icon: <Foundation name="book" size={24} color={tw.color("gray-600")} />,
    },
    {
      name: "Active Shipment",
      href: "/active-shipment",
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
      href: "/book-ride",
      icon: (
        <FontAwesome6 name="car-side" size={24} color={tw.color("gray-600")} />
      ),
    },
    {
      name: "Freight Quote",
      href: "/freight-quote",
      icon: <FontAwesome name="plane" size={24} color={tw.color("gray-600")} />,
    },
    {
      name: "Track Shipment",
      href: "/track-shipment",
      icon: (
        <Ionicons
          name="locate-outline"
          size={24}
          color={tw.color("gray-600")}
        />
      ),
    },
    {
      name: "Booking History",
      href: "/booking-history",
      icon: (
        <FontAwesome5 name="history" size={24} color={tw.color("gray-600")} />
      ),
    },
  ];
  const NavView = true ? UserNav : DrivevrNav;
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
          <TouchableOpacity
            style={tw`flex flex-row items-center gap-2 p-4 pl-5`}
            key={index}
          >
            <View style={tw`w-10`}>{item.icon}</View>
            <Text style={tw`font-Regular text-sm text-gray-600`}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
        {/* notification  */}
        <TouchableOpacity style={tw`flex flex-row items-center gap-2 p-4 pl-5`}>
          <View style={tw`w-10`}>
            <Fontisto name="bell" size={24} color={tw.color("gray-600")} />
          </View>
          <Text style={tw`font-Regular text-sm text-gray-600`}>
            Notifications
          </Text>
        </TouchableOpacity>
        {/* settings  */}
        <TouchableOpacity style={tw`flex flex-row items-center gap-2 p-4 pl-5`}>
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
