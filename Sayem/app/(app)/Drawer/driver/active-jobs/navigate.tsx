import { View, Text, ScrollView } from "react-native";
import React from "react";
import StackContainer from "../../../../../Components/StackContainer";
import { Image } from "expo-image";
import tw from "../../../../../tailwind.config";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import TextSelect from "../../../../../Components/TextSelect";
import CustomButton from "../../../../../Components/CustomButton";
import { router } from "expo-router";
import { deliveryStatus } from "../../../../../lib/data";

const Navigate = () => {
  const [status, setStatus] = React.useState({ value: "", View: false });
  return (
    <StackContainer title="Active Jobs" desc="Navigate to your destination">
      <ScrollView style={tw`flex-1 p-5`} showsVerticalScrollIndicator={false}>
        <Text style={tw`font-Medium text-lg my-2`}>Live Tracker</Text>
        {/* enroute  */}
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
        <View style={tw`w-full h-auto`}>
          <Image
            source={require("../../../../../assets/Images/map.png")}
            contentFit="cover"
            style={tw`w-full h-96`}
          />
        </View>
        {/* shipping details  */}
        <View style={tw`p-3 my-2`}>
          <Text style={tw`font-Medium text-lg`}>Booking ID</Text>
          <Text style={tw`font-Regular text-xs`}>ETTO-2025-0114</Text>
          <View style={tw`flex flex-row items-center my-2`}>
            <Text
              style={tw`font-Regular text-xs bg-orange-200 text-orange-800 p-2 rounded-lg`}
            >
              Awaiting Pickup
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
        {/* status update  */}
        <View>
          <TextSelect
            title="Status Update"
            placeholder="--Select Status--"
            data={deliveryStatus}
            selectedValue={status.value}
            onValueChange={({ itemValue }) =>
              setStatus({ ...status, value: itemValue })
            }
            selectState={status.View}
            setSelectState={() => setStatus({ ...status, View: !status.View })}
          />
          <View style={tw`flex flex-row items-center my-3 gap-3`}>
            <View style={tw`flex-1`}>
              <CustomButton
                title="Call Customer"
                icon={<MaterialIcons name="call" size={20} color="white" />}
                onPress={() => {}}
              />
            </View>
            <View style={tw`flex-1`}>
              <CustomButton
                title="Message"
                icon={
                  <MaterialCommunityIcons
                    name="chat-processing-outline"
                    size={20}
                    color={tw.color("gray-600")}
                  />
                }
                display="bordered"
                onPress={() => {
                  router.push("/Drawer/driver/active-jobs/chat");
                }}
              />
            </View>
          </View>
          {status.value.toLowerCase() === "delivered" ? (
            <CustomButton
              title="Complete Delivery"
              onPress={() => {
                router.push("/Drawer/driver/active-jobs/delivery");
              }}
            />
          ) : (
            <CustomButton title="Update Status" onPress={() => {}} />
          )}
        </View>
      </ScrollView>
    </StackContainer>
  );
};

export default Navigate;
