import { View, Text, ScrollView } from "react-native";
import React from "react";
import StackContainer from "../../../../../Components/StackContainer";
import tw from "../../../../../tailwind.config";
import { Image } from "expo-image";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import CustomButton from "../../../../../Components/CustomButton";

const QuoteReceipt = () => {
  const { mode } = useLocalSearchParams<{ mode: "AIR" | "SEA" }>();

  // formatting mode
  const capsFirstLetter = mode?.charAt(0).toUpperCase();
  const smallFirstLetter = mode?.charAt(0).toLowerCase();
  const restWord = mode.slice(1).toLowerCase();
  const capsFormattedMode = `${capsFirstLetter}${restWord}`;
  return (
    <StackContainer title="Quote Receipt" desc="Your quote receipt">
      <ScrollView style={tw`p-5 flex-1`}>
        <View style={tw`gap-3 flex items-center justify-center`}>
          <Image
            source={require("../../../../../assets//Images/success.png")}
            contentFit="cover"
            style={tw`w-20 h-20`}
          />
          <Text style={tw`font-Medium text-lg`}>Booking Confirmed</Text>
          <Text style={tw`font-Regular text-xs text-gray-500`}>
            Your freight shipment has been booked successfully
          </Text>
        </View>
        <View style={tw`my-4 mt-10 gap-1`}>
          <Text style={tw`font-Medium text-lg`}>Booking Details</Text>
          <Text style={tw`font-Regular text-sm text-gray-500`}>
            Reference: {"FRB-1763068526528"}
          </Text>
          <View style={tw`flex flex-row items-start `}>
            <Text style={tw`text-sm font-Regular text-gray-500`}>
              Package Description: 
            </Text>
            <Text style={tw`flex-1 text-sm font-Regular text-gray-500`}>
              {"A laser cutting machine"}
            </Text>
          </View>
        </View>
        <View
          style={tw`mt-4 bg-gray-200/50 p-3 rounded-xl border border-gray-400 gap-2`}
        >
          <View style={tw`flex flex-row items-center gap-2 my-2`}>
            <FontAwesome
              name={mode === "AIR" ? "plane" : "ship"}
              size={20}
              color="black"
            />
            <Text style={tw`font-Regular text-xs`}>
              {capsFormattedMode} freight
            </Text>
          </View>
          {/* routes  */}
          <View style={tw`flex flex-row items-center justify-between`}>
            <Text style={tw`font-Medium text-sm text-gray-500`}>Route</Text>
            <Text style={tw`font-Medium text-sm text-gray-800`}>
              Lagos &rarr; Ibadan
            </Text>
          </View>
          {/* truck feet  */}
          <View style={tw`flex flex-row items-center justify-between`}>
            <Text style={tw`font-Medium text-sm text-gray-500`}>
              Truck Feet
            </Text>
            <Text style={tw`font-Medium text-sm text-gray-500`}>
              20ft Truck
            </Text>
          </View>
          {/* total  */}
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
              &bull; You will receive a confirmation email shortly
            </Text>
            <Text style={tw`font-Regular text-xs text-gray-500`}>
              &bull; Our team will contact you within 24 hours.
            </Text>
            <Text style={tw`font-Regular text-xs text-gray-500`}>
              &bull; Track your shipment anytime from your dashboard
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
        <CustomButton title="Book Another shipment" onPress={() => {}} />
      </ScrollView>
    </StackContainer>
  );
};

export default QuoteReceipt;
