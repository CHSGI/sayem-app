import { View, Text } from "react-native";
import React from "react";
import StackContainer from "../../../../../Components/StackContainer";
import { ScrollView } from "react-native";
import tw from "../../../../../tailwind.config";
import { Image } from "expo-image";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "../../../../../Components/CustomButton";

const BookingReceipt = () => {
  return (
    <StackContainer title="Booking Receipt" desc="Booking Receipt">
      <ScrollView style={tw`flex-1 p-5`}>
        <View style={tw`gap-3 flex items-center justify-center`}>
          <Image
            source={require("../../../../../assets//Images/success.png")}
            contentFit="cover"
            style={tw`w-20 h-20`}
          />
          <Text style={tw`font-Medium text-lg`}>Booking Receipt</Text>
          <Text style={tw`font-Regular text-xs text-gray-500`}>
            Your Shipment have been booked successfully
          </Text>
        </View>
        <View style={tw`my-4 mt-10 gap-1`}>
          <Text style={tw`font-Medium text-lg`}>Booking Details</Text>
          <Text style={tw`font-Regular text-sm text-gray-500`}>
            Reference: {"BKS-1245309f683"}
          </Text>
          <View style={tw`flex flex-row items-start `}>
            <Text style={tw`text-sm font-Regular text-gray-500`}>
              Special Instruction: 
            </Text>
            <Text style={tw`flex-1 text-sm font-Regular text-gray-500`}>
              {
                "Please handle with care as it is very fragile and needs maximum packing"
              }
            </Text>
          </View>
        </View>
        <View
          style={tw`mt-4 bg-gray-200/50 p-3 rounded-xl border border-gray-400 gap-2`}
        >
          {/* routes  */}
          <View style={tw`flex flex-row items-center justify-between`}>
            <Text style={tw`font-Medium text-sm text-gray-500`}>Route</Text>
            <Text style={tw`font-Medium text-sm text-gray-800`}>
              Lagos &rarr; Ibadan
            </Text>
          </View>
          {/* truch feet  */}
          <View style={tw`flex flex-row items-center justify-between`}>
            <Text style={tw`font-Medium text-sm text-gray-500`}>
              Truck Feet
            </Text>
            <Text style={tw`font-Medium text-sm text-gray-500`}>
              20ft Truck
            </Text>
          </View>
          <View style={tw`flex flex-row items-center justify-between`}>
            <Text style={tw`font-Medium text-sm text-gray-500`}>Total</Text>
            <Text style={tw`font-Medium text-sm text-gray-500`}>
              &#8358;9000
            </Text>
          </View>
        </View>
        {/* next step  */}
        <View
          style={tw`mt-5 bg-primary/10 p-3 rounded-xl border border-primary/20 gap-2`}
        >
          <View style={tw`flex flex-row items-center gap-2`}>
            <AntDesign name="code-sandbox" size={24} color="black" />
            <Text style={tw`font-Medium text-sm`}>Next Step</Text>
          </View>
          <View style={tw``}>
            <Text
              style={tw`font-Regular text-xs text-gray-500 flex flex-row items-center`}
            >
              &bull; You will receive a confirmation email/notification shortly
              when driver is assigned.
            </Text>
            <Text style={tw`font-Regular text-xs text-gray-500`}>
              &bull; You will receive a confirmation email/notification shortly
              when driver is assigned. Track your shipment anytime from your
              dashboard.
            </Text>
          </View>
        </View>
        <View
          style={tw`flex-1 flex-row items-center justify-between gap-4 mt-5 my-4`}
        >
          <View style={tw`flex-1`}>
            <CustomButton
              title="Download"
              icon={<AntDesign name="download" size={24} color="black" />}
              onPress={() => {}}
              display="bordered"
            />
          </View>
          <View style={tw`flex-1`}>
            <CustomButton
              title="Share"
              icon={<AntDesign name="share-alt" size={24} color="black" />}
              onPress={() => {}}
              display="bordered"
            />
          </View>
        </View>
        <CustomButton title="Track" onPress={() => {}} />
      </ScrollView>
    </StackContainer>
  );
};

export default BookingReceipt;
