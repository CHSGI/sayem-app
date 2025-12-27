import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import tw from "../../tailwind.config";
import { Feather, Ionicons } from "@expo/vector-icons";
import CustomButton from "../CustomButton";
import { router } from "expo-router";

const UserHome = () => {
  const displays = [
    {
      title: "Total Bookings",
      value: "24",
      icon: <Feather name="book" size={24} color={tw.color("blue-500")} />,
    },
    {
      title: "Active Shipment",
      value: "3",
      icon: <Feather name="truck" size={24} color={tw.color("red-500")} />,
    },
    {
      title: "Completed",
      value: "18",
      icon: (
        <Feather name="check-circle" size={24} color={tw.color("green-600")} />
      ),
    },
    {
      title: "Pending",
      value: "3",
      icon: <Feather name="clock" size={24} color={tw.color("yellow-500")} />,
    },
  ];
  const quickActions = [
    {
      title: "Book New Shipment",
      icon: <Feather name="book" size={24} />,
      href: "/Drawer/user/book-shipment",
    },
    {
      title: "Track Delivery",
      icon: <Ionicons name="location-outline" size={24} />,
      href: "/Drawer/user/active-shipment",
    },
    {
      title: "View History",
      icon: <Feather name="clock" size={24} />,
      href: "/Drawer/user/booking-history",
    },
  ];
  return (
    <ScrollView style={tw`p-5 gap-5`} showsVerticalScrollIndicator={false}>
      {/* <CustomButton
        title="KYC"
        onPress={() => {
          router.push("/kyc");
        }}
      /> */}
      <Text style={tw`font-SemiBold text-xl text-primary`}>
        Welcome Back, {"User"}
      </Text>
      <Text style={tw`font-Regular text-sm text-gray-600`}>
        Manage your shipments and track deliveries.
      </Text>
      <View style={tw`gap-3 mt-5`}>
        {displays.map((item, index) => (
          <View
            key={index}
            style={tw`p-5 bg-white rounded-lg border border-gray-200 gap-3`}
          >
            <Text style={tw`font-Regular text-sm text-gray-600`}>
              {item.title}
            </Text>
            <View style={tw`flex flex-row items-center gap-2`}>
              <Text style={tw`flex-1 font-Medium text-lg`}>{item.value}</Text>
              <Text>{item.icon}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={tw`my-5 bg-white p-5 rounded-lg border border-gray-200`}>
        <Text style={tw`font-Medium text-lg`}>Quick Actions</Text>
        <Text style={tw`font-Regular text-sm text-gray-600 my-1`}>
          Get started with common tasks
        </Text>
        <View style={tw`my-2 gap-3`}>
          {quickActions.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                router.push(item.href);
              }}
              key={index}
              style={tw`p-4 rounded-xl border gap-5 shadow-lg border-gray-200`}
            >
              <View style={tw`flex items-center justify-center`}>
                {item.icon}
              </View>
              <Text style={tw`font-Medium text-sm text-center`}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default UserHome;
