import { View, Text, ScrollView } from "react-native";
import React from "react";
import StackContainer from "../../../../../Components/StackContainer";
import tw from "../../../../../tailwind.config";
import { Image } from "expo-image";

const LivePreview = () => {
  return (
    <StackContainer
      title="Live Preview"
      desc="Track your shipment's real-time location and status updates."
    >
      <ScrollView style={tw`flex-1 p-5`}>
        <View style={tw``}>
          <Text style={tw`font-Medium text-primary text-lg`}>Live Tracker</Text>
          <View
            style={tw`flex flex-row items-center gap-2 bg-primary/10 p-4 rounded-lg border border-primary/50 my-3`}
          >
            <View style={tw`gap-2 flex-1`}>
              <Text style={tw`font-Medium text-sm`}>
                Your delivery is on the way!
              </Text>
              <Text style={tw`font-Regular text-xs`}>
                Driver is en route to your location
              </Text>
            </View>
            <Text style={tw`p-2 bg-primary/80 text-white rounded-xl`}>
              Enroute
            </Text>
          </View>
          {/* map goes here  */}
          <View style={tw`w-full h-auto mt-10`}>
            <Image
              source={require("../../../../../assets/Images/map.png")}
              contentFit="cover"
              style={tw`w-full h-96`}
            />
          </View>
          {/* details  */}
          <View
            style={tw`bg-white border border-primary/40 rounded-xl p-3 my-2`}
          >
            <Text style={tw`font-Medium text-base`}>Shipment Details</Text>
            <View style={tw`flex flex-row items-center my-3`}>
              <View style={tw`gap-2 flex-1`}>
                <Text style={tw`font-Medium text-sm`}>Booking ID</Text>
                <Text style={tw`font-Regular text-xs`}>BK201</Text>
              </View>
              <View style={tw`gap-2 flex-1`}>
                <Text style={tw`font-Medium text-sm`}>ETA</Text>
                <Text style={tw`font-Regular text-xs`}>4 hours 20 mins</Text>
              </View>
            </View>
            <View style={tw`flex flex-row items-center my-3`}>
              <View style={tw`gap-2 flex-1`}>
                <Text style={tw`font-Medium text-sm`}>Price</Text>
                <Text style={tw`font-Regular text-xs text-green-600`}>
                  ₦45,000
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* <Text>LivePreview</Text> */}
    </StackContainer>
  );
};

export default LivePreview;
