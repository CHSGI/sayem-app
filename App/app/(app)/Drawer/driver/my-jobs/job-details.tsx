import { View, Text, ScrollView } from "react-native";
import React from "react";
import CustomButton from "../../../../../Components/CustomButton";
import tw from "../../../../../tailwind.config";
import { Ionicons } from "@expo/vector-icons";
import StackContainer from "../../../../../Components/StackContainer";

const JobDetails = () => {
  return (
    <StackContainer
      title="Job details"
      desc="Detailed information about this shipment."
    >
      <ScrollView style={tw`flex-1 p-5`}>
        {/* shipping details  */}
        <View style={tw`p-3`}>
          <Text style={tw`font-Medium text-lg`}>Job Details</Text>
          <Text style={tw`font-Regular text-xs`}>ETTO-2025-0114</Text>
          <View style={tw`flex flex-row items-center my-2`}>
            <Text
              style={tw`font-Medium text-xs bg-blue-200 text-blue-800 p-2 rounded-lg`}
            >
              ETTO
            </Text>
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
                <Text style={tw`text-sm font-Regular text-gray-600`}>
                  Pickup
                </Text>
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
          {/* divider  */}
          <View style={tw`border-b border-gray-300 my-3`}></View>
          <View style={tw`flex flex-row items-center my-3`}>
            <View style={tw`gap-2 flex-1`}>
              <Text style={tw`font-Medium text-sm`}>Cargo Info</Text>
              <Text style={tw`font-Regular text-xs`}>45 cartons, Laptop</Text>
            </View>
            <View style={tw`gap-2 flex-1`}>
              <Text style={tw`font-Medium text-sm`}>Distance</Text>
              <Text style={tw`font-Regular text-xs`}>456 km</Text>
            </View>
          </View>
          <View
            style={tw`flex flex-row gap-4 items-center my-3 bg-gray-200 rounded-lg p-3`}
          >
            <View style={tw`gap-2 flex-1`}>
              <Text style={tw`font-Medium text-sm`}>Estimated Payment</Text>
              <Text style={tw`font-Regular text-xs`}>
                Includes base fare and fuel allowance.
              </Text>
            </View>
            <Text>₦45,000</Text>
          </View>
        </View>
      </ScrollView>
    </StackContainer>
  );
};

export default JobDetails;
