import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import StackContainer from "../../../../../Components/StackContainer";
import tw from "../../../../../tailwind.config";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const SelectRide = () => {
  const rides = [
    {
      name: "Economy",
      description: "Standard sedans, low cost",
      capacity: 4,
      price: " ₦3,500",
      image: require("../../../../../assets/Images/economy.png"),
    },
    {
      name: "Comfort",
      description: "Air-conditioned cars, premium comfort",
      capacity: 4,
      price: " ₦5,000",
      image: require("../../../../../assets/Images/comfort.png"),
    },
    {
      name: "Business",
      description: "SUVs or luxury cars",
      capacity: 6,
      price: " ₦8,000",
      image: require("../../../../../assets/Images/business.png"),
    },
    {
      name: "Van",
      description: "For group rides or small lugagge",
      capacity: 8,
      price: " ₦10,000",
      image: require("../../../../../assets/Images/van.png"),
    },
  ];
  return (
    <StackContainer title="Select Ride" desc="Select your preferred ride">
      <ScrollView style={tw`p-5 mb-10 flex-1`}>
        <View style={tw`gap-1`}>
          <Text style={tw`font-Medium text-primary text-lg`}>
            Select Ride Type
          </Text>
          <Text style={tw`font-Regular text-sm`}>
            Choose your preferred vehicle
          </Text>
        </View>
        <View style={tw`mt-5 gap-3`}>
          {rides.map((ride, index) => (
            <TouchableOpacity
              onPress={() => {
                router.push("/Drawer/user/book-ride/ride-details");
              }}
              key={index}
              style={tw`p-3 rounded-xl border border-gray-300 bg-gray-50 flex flex-row items-center gap-3`}
            >
              <Image
                source={ride.image}
                contentFit="contain"
                style={tw`w-12 h-12`}
              />
              <View style={tw`flex-1 flex-row items-center`}>
                <View style={tw`gap-2 flex-1`}>
                  <Text style={tw`font-Medium text-base`}>{ride.name}</Text>
                  <Text style={tw`font-Regular text-sm`}>
                    {ride.description}
                  </Text>
                  <View style={tw`flex flex-row items-center gap-1`}>
                    <Ionicons
                      name="people-circle-outline"
                      size={20}
                      color={tw.color("gray-500")}
                    />
                    <Text>{ride.capacity} Passengers</Text>
                  </View>
                </View>
                <View style={tw``}>
                  <Text style={tw`font-SemiBold text-lg`}>{ride.price}</Text>
                  <Text style={tw``}>10 mins away</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </StackContainer>
  );
};

export default SelectRide;
