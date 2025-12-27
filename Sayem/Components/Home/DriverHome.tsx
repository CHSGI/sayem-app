import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "../../tailwind.config";
import { Feather, Fontisto, Ionicons } from "@expo/vector-icons";
import CustomButton from "../CustomButton";

const DriverHome = () => {
  const driverView = [
    {
      title: "Total Earnings",
      value: "24",
      misc: "",
    },
    {
      title: "Completed Trips",
      value: "143",
      misc: `${8} this week`,
    },
    {
      title: "Active Deliveries",
      value: "1",
      misc: "",
    },
    {
      title: "Rating",
      value: "4.5",
      misc: `${8} reviews`,
    },
  ];
  return (
    <ScrollView style={tw`p-5`}>
      <Text style={tw`font-SemiBold text-xl text-primary`}>
        Welcome Back, {"Driver"}
      </Text>
      <View style={tw`gap-3 mt-5`}>
        {driverView.map((item, index) => (
          <View
            key={index}
            style={tw`p-5 bg-white rounded-lg border border-gray-200 gap-3`}
          >
            <Text style={tw`font-Regular text-sm text-gray-600`}>
              {item.title}
            </Text>
            <View style={tw`flex flex-row items-center gap-5`}>
              <Text style={tw`font-Medium text-lg`}>{item.value}</Text>
              {index === 3 && (
                <View>
                  <Fontisto
                    name="star"
                    size={20}
                    color={tw.color("gray-600")}
                  />
                </View>
              )}
            </View>
            {(index === 1 || index === 3) && (
              <Text style={tw`font-Regular text-xs text-gray-600`}>
                {item.misc}
              </Text>
            )}
            {index === 2 && (
              <Text style={tw`font-Regular text-xs text-primary`}>
                In progress
              </Text>
            )}
          </View>
        ))}
      </View>
      {/* active deliveries  */}
      <View style={tw`my-5 bg-white p-5 rounded-lg border border-gray-200`}>
        <View style={tw`flex flex-row items-center justify-between mb-3`}>
          <Text style={tw`font-Medium text-lg`}>Active Delivery</Text>
          <Text
            style={tw`font-Medium text-xs text-primary bg-primary/10 p-2 rounded-lg`}
          >
            In Transit
          </Text>
        </View>
        <View style={tw`my-2 gap-1`}>
          <Text style={tw`text-sm font-Regular text-gray-600`}>Booking ID</Text>
          <Text style={tw`font-Medium text-sm`}>ETTO-2025-114</Text>
        </View>
        <View style={tw`my-2 gap-1`}>
          <Text style={tw`text-sm font-Regular text-gray-600`}>Customer</Text>
          <Text style={tw`font-Medium text-sm`}>ABC Trading Company</Text>
        </View>
        {/* pickup and dropoff  */}
        <View>
          {/* pickup  */}
          <View style={tw`flex flex-row items-center gap-2`}>
            <Ionicons
              name="location-outline"
              size={25}
              color={tw.color("green-500")}
            />
            <View style={tw`my-2 gap-1`}>
              <Text style={tw`text-sm font-Regular text-gray-600`}>Pickup</Text>
              <Text style={tw`font-Medium text-sm`}>12 Adeola St, Lagos</Text>
            </View>
          </View>
          {/* drop off  */}
          <View style={tw`flex flex-row items-center gap-2`}>
            <Ionicons
              name="location-outline"
              size={25}
              color={tw.color("red-500")}
            />
            <View style={tw`my-2 gap-1`}>
              <Text style={tw`text-sm font-Regular text-gray-600`}>
                Drop-Off
              </Text>
              <Text style={tw`font-Medium text-sm`}>
                45 University Rd, Ibadan
              </Text>
            </View>
          </View>
        </View>
        {/* distance and payment  */}
        <View style={tw`flex flex-row items-center gap-10 my-2`}>
          {/* distance */}
          <View style={tw`gap-2`}>
            <Text style={tw`text-sm font-Regular text-gray-600`}>Distance</Text>
            <Text style={tw`font-Medium text-sm`}>456 km</Text>
          </View>

          {/* payment  */}
          <View style={tw`gap-2`}>
            <Text style={tw`text-sm font-Regular text-gray-600`}>Payment</Text>
            <Text style={tw`font-Medium text-sm`}>$120</Text>
          </View>
        </View>
        {/* tags */}
        <View
          style={tw`flex flex-row items-start gap-2 my-2 border border-yellow-300 bg-yellow-50 p-2 rounded-lg`}
        >
          <Ionicons
            name="information-circle-outline"
            size={24}
            color={tw.color("yellow-600")}
          />
          <View style={tw`gap-2`}>
            <Text style={tw`font-Regular text-xs text-gray-600`}>
              Special Instruction
            </Text>
            <Text style={tw`font-Regular text-xs`}>
              Fragile items - Handle with care
            </Text>
          </View>
        </View>
        <CustomButton title="View Details" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

export default DriverHome;
