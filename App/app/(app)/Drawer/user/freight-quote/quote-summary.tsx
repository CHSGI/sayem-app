import {
  View,
  Text,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import StackContainer from "../../../../../Components/StackContainer";
import { router, useLocalSearchParams } from "expo-router";
import tw from "../../../../../tailwind.config";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import CustomButton from "../../../../../Components/CustomButton";

const QuoteSummary = () => {
  const { mode } = useLocalSearchParams<{ mode: "AIR" | "SEA" }>();

  // formatting mode
  const capsFirstLetter = mode?.charAt(0).toUpperCase();
  const smallFirstLetter = mode?.charAt(0).toLowerCase();
  const restWord = mode.slice(1).toLowerCase();
  const capsFormattedMode = `${capsFirstLetter}${restWord}`;
  const smallFormattedMode = `${smallFirstLetter}${restWord}`;
  return (
    <StackContainer title="Quote Summary" desc="Review your quote">
      <ScrollView style={tw`p-5 flex-1`}>
        {/* title  */}
        <View style={tw``}>
          <Text style={tw`font-Medium text-lg text-primary`}>
            Your Freight Quote
          </Text>
          <Text style={tw`font-Regular text-sm`}>
            Quote ID: FRQ-1763066980062
          </Text>
        </View>
        {/* body  */}
        <View style={tw`shadow-md rounded-xl bg-white p-5 my-5`}>
          <Text style={tw`font-Medium text-base`}>Quote Summary</Text>
          <Text style={tw`font-Regular text-xs`}>Valid until 11/20/2025</Text>
          <View style={tw`my-4`}>
            {/* freight type  */}
            <Text style={tw`font-Medium text-base`}>Freight Type</Text>
            <View style={tw`bg-gray-200 p-3 rounded-lg my-2`}>
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
              {/* directions  */}
              <View style={tw`gap-2`}>
                <Text style={tw`font-Regular text-sm`}>Lagos &rarr; Abuja</Text>
                <Text style={tw`font-Regular text-sm`}>Truck: 400ft</Text>
              </View>
            </View>
            {/* cost breakdown  */}
            <Text style={tw`font-Medium text-base mt-5`}>Cost Breakdown</Text>
            <View style={tw`my-2 gap-2`}>
              {/* base cost  */}
              <View style={tw`flex flex-row items-center justify-between`}>
                <Text style={tw`font-Medium text-sm text-gray-400`}>
                  Base Freight Cost
                </Text>
                <Text style={tw`font-Medium text-sm `}>₦1,800</Text>
              </View>
              {/* handling charges  */}
              <View style={tw`flex flex-row items-center justify-between`}>
                <Text style={tw`font-Medium text-sm text-gray-400`}>
                  Handling Charges
                </Text>
                <Text style={tw`font-Medium text-sm `}>₦180</Text>
              </View>
              {/* Insurance  */}
              <View style={tw`flex flex-row items-center justify-between`}>
                <Text style={tw`font-Medium text-sm text-gray-400`}>
                  Insurance
                </Text>
                <Text style={tw`font-Medium text-sm `}>₦5000</Text>
              </View>
              {/* VAT (7.5%)  */}
              <View style={tw`flex flex-row items-center justify-between`}>
                <Text style={tw`font-Medium text-sm text-gray-400`}>
                  VAT (7.5%)
                </Text>
                <Text style={tw`font-Medium text-sm `}>₦530.25</Text>
              </View>
            </View>
            <View style={tw`border-b border-b-gray-400 my-2`}></View>
            {/* total cost  */}
            <View style={tw`flex flex-row items-center justify-between`}>
              <Text style={tw`font-Medium text-base text-gray-400`}>Total</Text>
              <Text style={tw`font-Medium text-base `}>₦2,510.25</Text>
            </View>
          </View>
          {/* delivery time  */}
          <View style={tw`bg-primary/10 rounded-xl p-5 shadow-lg my-5`}>
            <View style={tw`flex flex-row items-center gap-2`}>
              <AntDesign name="code-sandbox" size={24} color="black" />
              <Text>Estimated Delivery Time</Text>
            </View>
            <Text style={tw`font Medium text-lg my-2 text-primary`}>
              5 - 10 Days
            </Text>
          </View>
          <Text style={tw`text-center text-xs font-Regular text-gray-400`}>
            Prices may vary depending on customs or truck fts
          </Text>
          {/* buttons  */}
          <View style={tw`mt-5`}>
            <CustomButton
              title="Confirm Quote"
              onPress={() => {
                router.push({
                  pathname: "/Drawer/user/freight-quote/quote-receipt",
                  params: { mode },
                });
              }}
            />
          </View>
        </View>
      </ScrollView>
    </StackContainer>
  );
};

export default QuoteSummary;
