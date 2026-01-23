import { View, Text, ScrollView } from "react-native";
import React from "react";
import StackContainer from "../../../../../Components/StackContainer";
import tw from "../../../../../tailwind.config";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../../../../../Components/CustomButton";
import { router } from "expo-router";

const ConfirmBooking = () => {
  return (
    <StackContainer title="Confirm Booking" desc="Confirm your booking">
      <ScrollView style={tw`p-5`}>
        <Text style={tw`font-Medium text-sm text-primary`}>
          Confirm Booking
        </Text>
        <Text style={tw`font-Regular text-xs text-gray-500`}>
          Review your booking details before confirming
        </Text>
        <View style={tw`my-3 gap-5`}>
          <View style={tw`flex flex-row items-start gap-2`}>
            <Ionicons
              name="location-outline"
              size={24}
              color={tw.color("green-600")}
            />
            <View style={tw`gap-2`}>
              <Text style={tw`font-Medium text-sm text-gray-400`}>
                Pickup Address
              </Text>
              <Text style={tw`font-Regular text-sm`}>
                4b, Kemi Avenue,Iliako, Ogun State
              </Text>
            </View>
          </View>
          <View style={tw`flex flex-row items-start gap-2`}>
            <Ionicons
              name="location-outline"
              size={24}
              color={tw.color("red-600")}
            />
            <View style={tw`gap-2`}>
              <Text style={tw`font-Medium text-sm text-gray-400`}>
                Delivery Address
              </Text>
              <Text style={tw`font-Regular text-sm`}>
                10a, williams street, igandi,Lagos State
              </Text>
            </View>
          </View>
          <View style={tw`border-t border-t-gray-300 my-2`}></View>
          <View style={tw`flex flex-row items-center justify-between`}>
            <Text style={tw`font-Regular text-xs text-gray-500`}>
              Vehicle Type
            </Text>
            <Text style={tw`font-Regular text-xs text-gray-500`}>
              20ft Truck
            </Text>
          </View>
          <View style={tw`flex flex-row items-center justify-between`}>
            <Text style={tw`font-Regular text-xs text-gray-500`}>
              Load Type
            </Text>
            <Text style={tw`font-Regular text-xs text-gray-500`}>
              Electronics
            </Text>
          </View>
          <View style={tw`border-t border-t-gray-300 my-2`}></View>
        </View>
        <View
          style={tw`rounded-xl bg-primary/15 border border-primary/40 p-3 gap-2`}
        >
          {/* base fee  */}
          <View style={tw`flex flex-row items-center justify-between`}>
            <Text style={tw`font-Regular text-xs text-gray-800`}>Base Fee</Text>
            <Text style={tw`font-Regular text-xs text-gray-800`}>
              &#8358;8500
            </Text>
          </View>
          {/* service fee  */}
          <View style={tw`flex flex-row items-center justify-between`}>
            <Text style={tw`font-Regular text-xs text-gray-500`}>
              Service Fee
            </Text>
            <Text style={tw`font-Regular text-xs text-gray-500`}>
              &#8358;500
            </Text>
          </View>
          <View style={tw`border-t border-t-primary/40 my-2`}></View>
          {/* total fee  */}
          <View style={tw`flex flex-row items-center justify-between`}>
            <Text style={tw`font-Regular text-xs text-gray-500`}>Total</Text>
            <Text style={tw`font-Regular text-xs text-gray-500`}>
              &#8358;9000
            </Text>
          </View>
        </View>
        <View style={tw`mt-10`}>
          <CustomButton
            title="Confirm Booking"
            onPress={() => {
              router.push("/Drawer/user/book-shipment/booking-receipt");
            }}
          />
        </View>
      </ScrollView>
    </StackContainer>
  );
};

export default ConfirmBooking;
