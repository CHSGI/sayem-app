import { View, Text } from "react-native";
import * as Progress from "react-native-progress";
import React from "react";
import tw from "../../tailwind.config";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import CustomButton from "../CustomButton";
import { router } from "expo-router";

const Driver = () => {
  return (
    <View style={tw`bg-white p-5 rounded-lg shadow-lg pb-10`}>
      <View style={tw`my-2`}>
        <Text style={tw`text-primary text-lg font-Medium text-center`}>
          KYC Verification
        </Text>
        <Text style={tw`text-xs font-Regular text-center`}>
          Complete your verification to access all features
        </Text>
      </View>
      <View style={tw`my-5`}>
        <Text style={tw`text-sm font-SemiBold`}>Verification Progress</Text>
        <View style={tw`my-2 flex`}>
          <Text style={tw`font-Regular text-xs mb-2`}>{"12"} % completed.</Text>
          <Progress.Bar
            progress={0.12}
            width={null}
            height={8}
            color={tw.color("green-600")}
            borderWidth={0}
            unfilledColor={tw.color("gray-300")}
          />
        </View>
      </View>
      <View
        style={tw`border border-dashed border-gray-300 p-3 my-3 rounded-lg flex flex-row items-center gap-3`}
      >
        <AntDesign name="warning" size={18} color={tw.color("gray-500")} />
        <Text style={tw`text-xs font-Regular text-gray-500 flex-1`}>
          Complete all verification steps to unlock full platform access.
        </Text>
      </View>

      {/* kyc progresses  */}
      <View style={tw` mt-2 gap-4`}>
        {/* 1 Personal Information  */}
        <View style={tw`flex border border-gray-300 rounded-lg p-3 py-3 gap-6`}>
          <View style={tw`flex flex-row items-start justify-between gap-3`}>
            <View style={tw`flex flex-row items-center gap-3 max-w-7/10`}>
              <View
                style={tw`bg-green-600 rounded-full flex items-center justify-center w-12 h-12`}
              >
                <AntDesign
                  name="file-text"
                  size={24}
                  color={tw.color("white")}
                />
              </View>
              <View style={tw`gap-1`}>
                <Text style={tw`font-SemiBold text-primary text-sm`}>
                  Personal Information
                </Text>
                <Text style={tw`font-Regular text-xs`}>
                  Tell us a little about yourself to get started
                </Text>
              </View>
            </View>
            <Text
              style={tw`bg-gray-400 text-white p-[3px] px-1 rounded-lg text-xs font-Medium`}
            >
              Pending
            </Text>
          </View>
          <CustomButton
            title="Continue"
            onPress={() => {
              router.push("/kyc/driver/pi");
            }}
          />
        </View>
        {/* 2 identity verification  */}
        <View style={tw`flex border border-gray-300 rounded-lg p-3 py-3 gap-6`}>
          <View style={tw`flex flex-row items-start justify-between gap-3`}>
            <View style={tw`flex flex-row items-center gap-3 max-w-7/10`}>
              <View
                style={tw`bg-green-600 rounded-full flex items-center justify-center w-12 h-12`}
              >
                <AntDesign
                  name="file-text"
                  size={24}
                  color={tw.color("white")}
                />
              </View>
              <View style={tw`gap-1`}>
                <Text style={tw`font-SemiBold text-primary text-sm`}>
                  Identity Verification
                </Text>
                <Text style={tw`font-Regular text-xs`}>
                  Upload a valid government-issued ID
                </Text>
              </View>
            </View>
            <Text
              style={tw`bg-gray-400 text-white p-[3px] px-1 rounded-lg text-xs font-Medium`}
            >
              Pending
            </Text>
          </View>
          <CustomButton
            title="Continue"
            onPress={() => {
              router.push("/kyc/driver/idv");
            }}
          />
        </View>
        {/* 3 Vehicle verification  */}
        <View style={tw`flex border border-gray-300 rounded-lg p-3 py-3 gap-6`}>
          <View style={tw`flex flex-row items-start justify-between gap-3`}>
            <View style={tw`flex flex-row items-center gap-3 max-w-7/10`}>
              <View
                style={tw`bg-green-600 rounded-full flex items-center justify-center w-12 h-12`}
              >
                <FontAwesome5
                  name="truck"
                  size={24}
                  color={tw.color("white")}
                />
              </View>
              <View style={tw`gap-1`}>
                <Text style={tw`font-SemiBold text-primary text-sm`}>
                  Vehicle Verification
                </Text>
                <Text style={tw`font-Regular text-xs`}>
                  Provide details and documents for your vehicle.
                </Text>
              </View>
            </View>
            <Text
              style={tw`bg-gray-400 text-white p-[3px] px-1 rounded-lg text-xs font-Medium`}
            >
              Pending
            </Text>
          </View>
          <CustomButton
            title="Continue"
            onPress={() => {
              router.push("/kyc/driver/vv");
            }}
          />
        </View>
        {/* 4 Financial verification  */}
        <View style={tw`flex border border-gray-300 rounded-lg p-3 py-3 gap-6`}>
          <View style={tw`flex flex-row items-start justify-between gap-3`}>
            <View style={tw`flex flex-row items-center gap-3 max-w-7/10`}>
              <View
                style={tw`bg-green-600 rounded-full flex items-center justify-center w-12 h-12`}
              >
                <AntDesign
                  name="file-text"
                  size={24}
                  color={tw.color("white")}
                />
              </View>
              <View style={tw`gap-1`}>
                <Text style={tw`font-SemiBold text-primary text-sm`}>
                  Financial Verification
                </Text>
                <Text style={tw`font-Regular text-xs`}>
                  We use this information to process payouts securely.
                </Text>
              </View>
            </View>
            <Text
              style={tw`bg-gray-400 text-white p-[3px] px-1 rounded-lg text-xs font-Medium`}
            >
              Pending
            </Text>
          </View>
          <CustomButton
            title="Continue"
            onPress={() => {
              router.push("/kyc/driver/fv");
            }}
          />
        </View>
        {/* 5 Background check  */}
        {/* <View style={tw`flex border border-gray-300 rounded-lg p-3 py-3 gap-6`}>
          <View style={tw`flex flex-row items-start justify-between gap-3`}>
            <View style={tw`flex flex-row items-center gap-3 max-w-7/10`}>
              <View
                style={tw`bg-blue-400 rounded-full flex items-center justify-center w-12 h-12`}
              >
                <AntDesign
                  name="file-text"
                  size={24}
                  color={tw.color("white")}
                />
              </View>
              <View style={tw`gap-1`}>
                <Text style={tw`font-SemiBold text-primary text-sm`}>
                  Background Check
                </Text>
                <Text style={tw`font-Regular text-xs`}>
                  We use this information to process payouts securely.
                </Text>
              </View>
            </View>
            <Text
              style={tw`bg-gray-400 text-white p-[3px] px-1 rounded-lg text-xs font-Medium`}
            >
              Pending
            </Text>
          </View>
          <CustomButton
            title="Continue"
            onPress={() => {
              router.push("/kyc/driver/bc");
            }}
          />
        </View> */}
        {/* 6 Selfie verification  */}
        <View style={tw`flex border border-gray-300 rounded-lg p-3 py-3 gap-6`}>
          <View style={tw`flex flex-row items-start justify-between gap-3`}>
            <View style={tw`flex flex-row items-center gap-3 max-w-7/10`}>
              <View
                style={tw`bg-purple-600 rounded-full flex items-center justify-center w-12 h-12`}
              >
                <AntDesign name="camera" size={24} color={tw.color("white")} />
              </View>
              <View style={tw`gap-1`}>
                <Text style={tw`font-SemiBold text-primary text-sm`}>
                  Selfie Verification
                </Text>
                <Text style={tw`font-Regular text-xs`}>
                  Take a live photo to match your ID
                </Text>
              </View>
            </View>
            <Text
              style={tw`bg-gray-400 text-white p-[3px] px-1 rounded-lg text-xs font-Medium`}
            >
              Pending
            </Text>
          </View>
          <CustomButton
            title="Continue"
            onPress={() => {
              router.push("/kyc/driver/sv");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Driver;
