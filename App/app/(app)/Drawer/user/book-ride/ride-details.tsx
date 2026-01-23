import { View, Text, ScrollView } from "react-native";
import React from "react";
import StackContainer from "../../../../../Components/StackContainer";
import tw from "../../../../../tailwind.config";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import CustomButton from "../../../../../Components/CustomButton";

const RideDetails = () => {
  return (
    <StackContainer title="Confirm Ride" desc="Confirm your ride details">
      <ScrollView showsVerticalScrollIndicator={false} style={tw`p-5 `}>
        <View style={tw`gap-5`}>
          <View style={tw`gap-1`}>
            <Text style={tw`font-Medium text-primary text-lg`}>
              Confirm Ride
            </Text>
            <Text style={tw`font-Regular text-sm`}>
              Review your trip details
            </Text>
          </View>
          {/* trip summary  */}
          <View style={tw`gap-1`}>
            <Text style={tw`font-Medium text-sm`}>Trip Summary</Text>
            {/* pickup  */}
            <View style={tw`flex-row items-center gap-2`}>
              <Ionicons
                name="location-outline"
                size={24}
                color={tw.color("green-800")}
                style={tw`bg-green-100 p-2 rounded-full w-10 h-10`}
              />
              <View style={tw`my-3`}>
                <Text style={tw`font-Regular text-sm text-gray-400`}>
                  Pickup
                </Text>
                <Text style={tw`text-gray-800 font-Medium text-sm`}>
                  Salvation First Ministry, Ayobo
                </Text>
              </View>
            </View>
            {/* stop 1  */}
            <View style={tw`flex-row items-center gap-2`}>
              <Ionicons
                name="location-outline"
                size={24}
                color={tw.color("gray-800")}
                style={tw`bg-gray-200 p-2 rounded-full w-10 h-10`}
              />
              <View style={tw`my-3`}>
                <Text style={tw`font-Regular text-sm text-gray-400`}>
                  Stop 1
                </Text>
                <Text style={tw`text-gray-800 font-Medium text-sm`}>
                  Anchor University
                </Text>
              </View>
            </View>
            {/* drop off  */}
            <View style={tw`flex-row items-center gap-2`}>
              <Ionicons
                name="location-outline"
                size={24}
                color={tw.color("red-800")}
                style={tw`bg-red-100 p-2 rounded-full w-10 h-10`}
              />
              <View style={tw`my-3`}>
                <Text style={tw`font-Regular text-sm text-gray-400`}>
                  Drop Off
                </Text>
                <Text style={tw`text-gray-800 font-Medium text-sm`}>
                  Romeo Suites
                </Text>
              </View>
            </View>
          </View>
          {/* ride details  */}
          <View style={tw`gap-1 my-3`}>
            <View style={tw`flex flex-row items-center justify-between`}>
              <Text style={tw`font-Medium text-sm`}>Ride Type</Text>
              <Text style={tw`font-Regular text-sm text-gray-400`}>
                Comfort
              </Text>
            </View>
            <View style={tw`flex flex-row items-center justify-between`}>
              <Text style={tw`font-Medium text-sm`}>Estimated Fare</Text>
              <Text style={tw`font-Regular text-sm text-gray-400`}>
                 ₦3,500
              </Text>
            </View>
          </View>
          <View style={tw`mt-5`}>
            <CustomButton title="Continue" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
    </StackContainer>
  );
};

export default RideDetails;
