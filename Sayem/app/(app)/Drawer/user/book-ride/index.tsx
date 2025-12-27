import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import React from "react";
import tw from "../../../../../tailwind.config";
import DrawerContainer from "../../../../../Components/DrawerContainer";
import GoogleTextInput from "../../../../../Components/GoogleTextInput";
import { Image } from "expo-image";
import CustomButton from "../../../../../Components/CustomButton";
import { AntDesign, Zocial } from "@expo/vector-icons";
import { router } from "expo-router";

const BookRide = () => {
  return (
    <DrawerContainer title="Book Ride">
      <KeyboardAvoidingView behavior="padding">
        <ScrollView style={tw`p-5 mb-10`}>
          <View style={tw``}>
            <Text style={tw`font-Medium text-primary text-lg`}>
              Trip Details
            </Text>
            <Text style={tw`font-Regular text-sm`}>Plan your journey</Text>
          </View>
          {/* map goes here  */}
          <View style={tw`w-full h-auto mt-10`}>
            <Image
              source={require("../../../../../assets/Images/map.png")}
              contentFit="cover"
              style={tw`w-full h-96`}
            />
          </View>
          {/* book ride and ongoing ride views  */}
          <View>
            {false ? (
              <View>
                {/* top view  */}
                <View style={tw`flex flex-row items-center gap-2`}>
                  <View style={tw`w-16 h-16 bg-gray-300 rounded-full mr-3`}>
                    {/* driver image here  */}
                  </View>
                  <View style={tw`my-3 gap-1 flex-1`}>
                    <Text style={tw`font-Medium text-base`}>Ibrahim Musa</Text>
                    <Text style={tw`font-Regular text-sm`}>
                      Toyota Camry • LAG-234-XY
                    </Text>
                    <Text style={tw`font-Regular text-sm`}>⭐ {"4.8"}</Text>
                  </View>
                  <View>
                    <Text style={tw`font-SemiBold text-base`}>4mins</Text>
                    <Text style={tw`font-Regular text-sm`}>ETA</Text>
                  </View>
                </View>
                <View>
                  {/* bottom view  */}
                  <View style={tw`my-3 flex-1 flex-row items-center gap-2`}>
                    <View style={tw`flex-1`}>
                      <CustomButton
                        title="Call"
                        onPress={() => {}}
                        display="bordered"
                      />
                    </View>
                    {/* <View style={tw`flex-1`}>
                      <CustomButton
                        title="Chat"
                        onPress={() => {}}
                        display="bordered"
                      />
                    </View> */}
                    <View style={tw`flex-1`}>
                      <CustomButton
                        title="Share"
                        onPress={() => {}}
                        display="bordered"
                      />
                    </View>
                  </View>
                  <CustomButton title="check ETA" onPress={() => {}} />
                </View>
              </View>
            ) : (
              // book a ride view
              <View>
                <View>
                  {/* pickup location */}
                  <GoogleTextInput
                    title="Pickup Location"
                    placeholder="Pickup Location"
                    keyboard="default"
                  />

                  {/* drop off location */}
                  <GoogleTextInput
                    title="Drop-Off Location"
                    placeholder="Drop-Off Location"
                    keyboard="default"
                  />
                </View>
                <View style={tw`mt-5 gap-4`}>
                  <CustomButton
                    title="Add Stop (Max 2)"
                    icon={
                      <AntDesign
                        name="plus"
                        size={20}
                        color={tw.color("gray-500")}
                      />
                    }
                    onPress={() => {}}
                    display="bordered"
                  />
                  <CustomButton
                    title="Continue"
                    onPress={() => {
                      router.push("/Drawer/user/book-ride/select-ride");
                    }}
                    display="solid"
                  />
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </DrawerContainer>
  );
};

export default BookRide;
