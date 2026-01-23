import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import DrawerContainer from "../../../../../Components/DrawerContainer";
import tw from "../../../../../tailwind.config";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

const FreightQuote = () => {
  return (
    <DrawerContainer title="Freight Quote">
      <ScrollView style={tw`p-5 flex-1`}>
        <View style={tw``}>
          <Text style={tw`font-Medium text-lg text-primary`}>
            Get Freight Quote
          </Text>
          <Text style={tw`font-Regular text-xs`}>Choose your freight mode</Text>
        </View>
        <View style={tw`my-5 gap-4`}>
          {/* air freight  */}
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/Drawer/user/freight-quote/shipping-info",
                params: { mode: "AIR" },
              })
            }
            style={tw`flex flex-row items-center bg-white border gap-3 border-gray-200 p-3 rounded-lg shadow-md`}
          >
            {/* icon goes here  */}
            <View
              style={tw`w-16 h-16 rounded-xl bg-primary/30 flex items-center justify-center`}
            >
              <FontAwesome name="plane" size={40} color={tw.color("white")} />
            </View>
            {/* right body  */}
            <View style={tw`flex-1`}>
              <View style={tw`gap-1 my-2`}>
                <Text style={tw`font-Medium text-base`}>Air Freight</Text>
                <Text style={tw`font-Regular text-sm text-gray-500`}>
                  Fast & Reliable
                </Text>
              </View>
              <View style={tw`gap-2`}>
                <Text style={tw`font-Regular text-xs text-gray-500 leading-5`}>
                  Fast, reliable delivery for lighter goods and urgent
                  shipments. Ideal for time-sensitive cargo.
                </Text>
                {/* delivery time  */}
                <View style={tw`flex flex-row items-center justify-between`}>
                  <Text style={tw`font-Medium text-sm text-gray-500`}>
                    Delivery Time
                  </Text>
                  <Text style={tw`font-Regular text-xs`}>2 - 10 days.</Text>
                </View>
                {/* recomendations  */}
                <View style={tw`flex flex-row items-center justify-between`}>
                  <Text style={tw`font-Medium text-sm text-gray-500`}>
                    Best For
                  </Text>
                  <Text style={tw`font-Regular text-xs`}>Light cargo</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          {/* Sea freight  */}
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/Drawer/user/freight-quote/shipping-info",
                params: { mode: "SEA" },
              })
            }
            style={tw`flex flex-row items-center bg-white border gap-3 border-gray-200 p-3 rounded-lg shadow-md`}
          >
            {/* icon goes here  */}
            <View
              style={tw`w-16 h-16 rounded-xl bg-primary/30 flex items-center justify-center`}
            >
              <FontAwesome name="ship" size={40} color={tw.color("white")} />
            </View>
            {/* right body  */}
            <View style={tw`flex-1`}>
              <View style={tw`gap-1 my-2`}>
                <Text style={tw`font-Medium text-base`}>Sea Freight</Text>
                <Text style={tw`font-Regular text-sm text-gray-500`}>
                  Cost Effective
                </Text>
              </View>
              <View style={tw`gap-2`}>
                <Text style={tw`font-Regular text-xs text-gray-500 leading-5`}>
                  Cost-effective for large, heavy, or bulk cargo. Perfect for
                  non-urgent, high-volume shipments.
                </Text>
                {/* delivery time  */}
                <View style={tw`flex flex-row items-center justify-between`}>
                  <Text style={tw`font-Medium text-sm text-gray-500`}>
                    Delivery Time
                  </Text>
                  <Text style={tw`font-Regular text-xs`}>15 - 35 days.</Text>
                </View>
                {/* recomendations  */}
                <View style={tw`flex flex-row items-center justify-between`}>
                  <Text style={tw`font-Medium text-sm text-gray-500`}>
                    Best For
                  </Text>
                  <Text style={tw`font-Regular text-xs`}>Heavy/Bulk cargo</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </DrawerContainer>
  );
};

export default FreightQuote;
